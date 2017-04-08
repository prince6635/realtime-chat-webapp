import React, {Component} from 'react';

class UserForm extends Component{

  onSubmit(e) {
    e.preventDefault();

    const inputNode = this.refs.user;
    const userName = inputNode.value;

    this.props.addUser(userName);

    inputNode.value = '';
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="form-group">
          <input className="form-control" type="text" ref="user"/>
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  addUser: React.PropTypes.func.isRequired
};

export default UserForm


