import React, {Component} from 'react';

class MessageForm extends Component{

  onSubmit(e) {
    e.preventDefault();

    const inputNode = this.refs.message;
    const message = inputNode.value;

    this.props.addMessage(message);

    inputNode.value = '';
  }

  render(){
    let input; // only render the input in form if there's a selected channel
    if(this.props.activeChannel.id !== undefined){
      input = (
        <input ref="message" type="text" className="form-control" placeholder="Add Message..."/>
      )
    }

    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          {input}
        </div>
      </form>
    )
  }
}

MessageForm.propTypes = {
  activeChannel: React.PropTypes.object.isRequired,
  addMessage: React.PropTypes.func.isRequired
};

export default MessageForm


