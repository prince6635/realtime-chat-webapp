import React, {Component} from 'react';

class UserForm extends Component{

  onSubmit(e) {
    e.preventDefault();

    const inputNode = this.refs.userName;
    const userName = inputNode.value;

    this.props.setUserName(userName);

    inputNode.value = '';
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input className="form-control" type="text" ref="userName" placeholder="Set Your Name..."/>
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: React.PropTypes.func.isRequired
};

export default UserForm


