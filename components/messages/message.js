import React, {Component} from 'react';
import Time from 'react-time'

class Message extends Component{

  render(){
    const {message} = this.props;
    let now = new Date();

    return (
      <li>
        <p><b>{message.userName}</b>{' '}<Time value={now} titleFormat="YYYY/MM/DD HH:mm" /></p>
        <br/>
        <p>{message.value}</p>
      </li>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
};

export default Message