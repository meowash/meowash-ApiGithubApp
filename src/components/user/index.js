import React, { Component } from 'react'
import { connect } from 'react-redux'

import { usersFetchData } from '../../actions/users'

import './users.scss'

export class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showFollowers: false,
        }
    }
    
    render() {
        const {users} = this.props
        return (
            <>

            <div className="cart">
                <div className="cart__user-title">
                      <div className="">
                        <div className="cart__name">Login of user: {users.login}</div> 
                        <div className="cart__name">Profile created at: {users.created_at}</div> 
                        <div className="cart__name">Following: {users.following}</div> 
                        <div className="cart__name">Repos: {users.public_repos}</div> 
                        <div className="cart__name">Company: {users.company === null ? 
                        <div>User doesn't have information about company</div> :
                        users.company
                        }
                        </div>
                        <div className="cart__name">location: {
                        users.company === null ? 
                            <div>User doesn't have information about location</div> :
                            users.company
                        }</div>
                        
                        <img className='cart__img' src={users.avatar_url} alt=""/> 
                    </div>
                    <button className="btn__followers" onClick={() => this.props.submitFollowers()}>Followers of user : {users.followers}</button>
                </div> {/* ./cart__user-title */}
            </div> {/* ./cart */}

            </>
        )
    }
}

const mapStateToProps = state => {
    return{
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usersFetchData: url => dispatch(usersFetchData(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)