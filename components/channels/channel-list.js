import React, {Component} from 'react';
import Channel from './channel';

class ChannelList extends Component{
  render(){
    return (
      <ul>
        {
          this.props.channels.map( chan => {
            return <Channel
              key={chan.id}
              channel={chan}
              // setChannel={this.props.setChannel}
              // activeChannel={this.props.activeChannel}
              {...this.props}
            />
          })
        }
      </ul>
    )
  }
}

ChannelList.propTypes = {
  channels: React.PropTypes.array.isRequired,
  setChannel: React.PropTypes.func.isRequired,
  activeChannel: React.PropTypes.object.isRequired
};

export default ChannelList

