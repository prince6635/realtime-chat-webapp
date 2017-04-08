import React, {Component} from 'react';
import MessageForm from './message-form';
import MessageList from './message-list';

class MessageSection extends Component{
  render(){
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>{this.props.currentChannel.name}</strong>
        </div>
        <div className="panel-body messages">
          <MessageList {...this.props}/>
          <MessageForm {...this.props}/>
        </div>
      </div>
    )
  }
}

MessageSection.propTypes = {
  currentChannel: React.PropTypes.object.isRequired,
  messages: React.PropTypes.array.isRequired,
  addMessage: React.PropTypes.func.isRequired
};

export default MessageSection