import React, {Component} from 'react';
import UserForm from './user-form'
import UserList from './user-list'

class UserSection extends Component{
  render(){
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-body users">
          <UserList {...this.props}/>
          <UserForm {...this.props}/>
        </div>
      </div>
    )
  }
}

UserSection.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUser: React.PropTypes.func.isRequired,
  addUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
};

export default UserSection