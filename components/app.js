// The most outer component, we need to have all props here and pass to channel, user, message components
import React, {Component} from 'react';
import ChannelSection from './channels/channel-section'
import UserSection from "./users/user-section";
import MessageSection from "./messages/message-section";
import Socket from "../socket";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      channels: [], // otherwise, it'd be null when the page is first loaded
      activeChannel: {},
      users: [],
      activeUser: {},
      messages: [],

      connected: false // for WebSocket
    };
  }

  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));

    socket.on('channel add', this.onAddChannel.bind(this));

    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this));

    socket.on('message add', this.onAddMessage.bind(this));
  }

  onAddMessage(message){
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }

  onAddUser(user){
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }

  onEditUser(editUser){
    let {users} = this.state;
    users = users.map(user => {
      if(editUser.id === user.id){
        return editUser;
      }
      return user;
    });
    this.setState({users});
  }

  onRemoveUser(removeUser){
    let {users} = this.state;
    users = users.filter(user => {
      return user.id !== removeUser.id;
    });
    this.setState({users});
  }

  onConnect(){
    this.setState({connected: true});

    // tell server to start sending data (not start right after they're connected, so Multipage app should start&stop feeds as needed),
    // and we only want Messages from the Active Channel
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }

  onDisconnect(){
    this.setState({connected: false});
  }

  onAddChannel(channel){
    let {channels} = this.state;
    channels.push(channel);
    this.setState(channels);
  }

  addChannel(name){
    /* don't need this, if we send the new channel to server
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    // equals:
    // channels.push({id: channels.length, name: name});
    this.setState({channels});
    */

    // Send to server
    this.socket.emit('channel add', {name});
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});

    // Get channel's messages
    this.socket.emit('message unsubscribe');
    this.setState({messages: []});
    this.socket.emit('message subscribe',
      {channelId: activeChannel.id});
  }

  setUserName(name){
    // Send to server
    this.socket.emit('user edit', {name});
  }

  addMessage(body) {
    // Send to server
    let {activeChannel} = this.state;
    this.socket.emit('message add',
      {channelId: activeChannel.id, body});
  }
  
  render(){
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            // channels={this.state.channels}
            // activeChannel={this.state.activeChannel}
            {...this.state}
            setChannel={this.setChannel.bind(this)}
            addChannel={this.addChannel.bind(this)}/>

          <UserSection
            {...this.state}
            setUserName={this.setUserName.bind(this)}/>
        </div>

        <MessageSection
          // currentChannel={this.state.activeChannel}
          // messages={this.state.messages}
          {...this.state}
          addMessage={this.addMessage.bind(this)}/>
      </div>
    )
  }
}

export default App