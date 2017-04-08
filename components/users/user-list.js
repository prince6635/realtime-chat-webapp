import React, {Component} from 'react';
import User from './user';

class UserList extends Component{
  render(){
    return (
      <ul>
        {
          this.props.users.map( user => {
            return <User
              key={user.id}
              user={user}
              {...this.props}
            />
          })
        }
      </ul>
    )
  }
}

UserList.propTypes = {
  users: React.PropTypes.array.isRequired,
  setUser: React.PropTypes.func.isRequired,
  activeUser: React.PropTypes.object.isRequired
};

export default UserList

