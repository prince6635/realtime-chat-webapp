import React, {Component} from 'react';

class MessageForm extends Component{

  onSubmit(e) {
    e.preventDefault();

    const inputNode = this.refs.message;
    const messageValue = inputNode.value;

    this.props.addMessage(messageValue);

    inputNode.value = '';
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input className="form-control" type="text" ref="message"/>
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  addMessage: React.PropTypes.func.isRequired
};

export default MessageForm


