import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/select-user-action';
import { selectUsername } from '../actions/select-username-action'
import users from "../config/users";


class UserList extends Component {

    renderList() {
        return users.userid.map((user, i) => {
            return (
                <li
                    key={i}
                    onClick={() => { this.props.selectUser(user); this.props.selectUsername(users[user].first) }}
                >
                    {users[user].first}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        selectUser: selectUser,
        selectUsername: selectUsername
    }, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
