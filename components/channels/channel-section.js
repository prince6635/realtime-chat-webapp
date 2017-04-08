import React, {Component} from 'react';
import ChannelForm from './channel-form'
import ChannelList from './channel-list'

class ChannelSection extends Component{
  render(){
    return (
      <div>
        {/*<ChannelList channels={this.props.channels} setChannel={this.props.setChannel}/>*/}
        {/*new sytax*/}
        <ChannelList {...this.props}/>
        <ChannelForm {...this.props}/>
      </div>
    )
  }
}

// Passed by app.js, the highest one in the component hierarchy
ChannelSection.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  addChannel: React.PropTypes.func.isRequired
};

export default ChannelSection