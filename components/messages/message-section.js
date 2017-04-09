import React, {Component} from 'react';
import MessageForm from './message-form';
import MessageList from './message-list';

class MessageSection extends Component{
  render(){
    let {activeChannel} = this.props;

    return (
      <div className="messages-container panel panel-default">
        <div className="panel-heading">
          <strong>{activeChannel.name}</strong>
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
  activeChannel: React.PropTypes.object.isRequired,
  messages: React.PropTypes.array.isRequired,
  addMessage: React.PropTypes.func.isRequired
};

export default MessageSection