// The most outer component, we need to have all props here and pass to channel, user, message components
import React, {Component} from 'react';
import ChannelSection from './channels/channel-section'
import UserSection from "./users/user-section";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      channels: [], // otherwise, it'd be null when the page is first loaded
      activeChannel: {},
      users: [],
      activeUser: {}
    };
  }

  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    // equals:
    // channels.push({id: channels.length, name: name});
    this.setState({channels});

    // TODO: send to server
  }

  setChannel(activeChannel) {
    this.setState({activeChannel});

    // TODO: get channel's messages
  }

  addUser(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});

    // TODO: send to server
  }

  setUser(activeUser) {
    this.setState({activeUser});

    // TODO: get User's messages
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
            setUser={this.setUser.bind(this)}
            addUser={this.addUser.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App