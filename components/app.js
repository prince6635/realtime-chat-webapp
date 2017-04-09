// The most outer component, we need to have all props here and pass to channel, user, message components
import React, {Component} from 'react';
import ChannelSection from './channels/channel-section'
import UserSection from "./users/user-section";
import MessageSection from "./messages/message-section";

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
    let ws = this.ws = new WebSocket("ws://echo.websocket.org");
    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
  }

  message(e){
    const event = JSON.parse(e.data);
    if(event.name === 'channel add'){
      this.newChannel(event.data);
    }
  }
  open(){
    this.setState({connected: true});
  }
  close(){
    this.setState({connected: false});
  }
  newChannel(channel){
    let {channels} = this.state;
    channels.push(channel);
    this.setState(channels);
  }

  addChannel(name){
    let {channels} = this.state;

    /* don't need this, if we send the new channel to server
    channels.push({id: channels.length, name});
    // equals:
    // channels.push({id: channels.length, name: name});
    this.setState({channels});
    */

    // TODO: send to server
    let msg = {
      name: 'channel add',
      data: {
        id: channels.length,
        name
      }
    };
    this.ws.send(JSON.stringify(msg));
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});

    // TODO: get channel's messages
  }

  setUserName(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});

    // TODO: send to server
  }

  addMessage(body) {
    let {messages, users} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({id: messages.length, body, createdAt, author});
    this.setState({messages});

    // TODO: send to server
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