import React, { Component } from 'react';
import { connect } from 'react-redux';
import users from "../config/users";

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <img src={users[this.props.user].thumbnail} />
                <h2>{users[this.props.user].first} {users[this.props.user].last}</h2>
                <h3>Age: {users[this.props.user].age}</h3>
                <h3>Description: {users[this.props.user].description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    const user = state.activeUser;
    console.log("user", user)
    return {
        user
    };
}

export default connect(mapStateToProps)(UserDetail);
