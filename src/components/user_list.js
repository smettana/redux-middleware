import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchUsers } from '../actions';
import { bindActionCreators } from 'redux';

class UserList extends Component{
    renderUser(user){
        return (
            <div className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a className="btn btn-primary" href={user.website}>Website</a>
            </div>
        )
    }

    componentWillMount(){
        this.props.fetchUsers()
    }

    render(){
        return(
            <div className="user-list">
                {
                    this.props.users.map(this.renderUser)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        users:state.users
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         fetchUsers: bindActionCreators(fetchUsers, dispatch),
//     }
// }  

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
export default connect(mapStateToProps, actions)(UserList);