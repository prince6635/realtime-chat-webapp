import React, {Component} from 'react';

class ChannelForm extends Component{

  onSubmit(e) {
    e.preventDefault();

    const inputNode = this.refs.channel;
    const channelName = inputNode.value;

    this.props.addChannel(channelName);

    inputNode.value = '';
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          {/*use ref to reference a DOM object instead of state object to access the typed input*/}
          <input className="form-control" type="text" ref="channel"/>
        </div>
      </form>
    )
  }
}

ChannelForm.propTypes = {
  addChannel: React.PropTypes.func.isRequired
};

export default ChannelForm


