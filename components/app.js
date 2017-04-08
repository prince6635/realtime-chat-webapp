// The most outer component, we need to have all props here and pass to channel, user, message components
import React, {Component} from 'react';
import ChannelSection from './channels/channel-section'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      channels: [] // otherwise, it'd be null when the page is first loaded
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
  
  render(){
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            channels={this.state.channels}
            setChannel={this.setChannel.bind(this)}
            addChannel={this.addChannel.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App