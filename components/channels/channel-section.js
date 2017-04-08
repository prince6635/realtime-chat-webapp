import React, {Component} from 'react';
import ChannelForm from './channel-form'
import ChannelList from './channel-list'

class ChannelSection extends Component{
  render(){
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Channels</strong>
        </div>
        <div className="panel-body channelss">
          {/*<ChannelList channels={this.props.channels} setChannel={this.props.setChannel}/>*/}
          {/*new sytax*/}
          <ChannelList {...this.props}/>
          <ChannelForm {...this.props}/>
        </div>
      </div>
    )
  }
}

// Passed by app.js, the highest one in the component hierarchy
ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
};

export default ChannelSection