import React, { Component } from 'react'
import { connect } from 'react-redux'

import { informationAboutFollowerFetchData } from "../../actions/informationAboutFollower"
import './information-about-follower.scss'

export class InformationAboutFollower extends Component {

    render() {
        const {informations} = this.props
        return (
            <div classname='information'>
                <button className="btn btn__close-information" onClick={() => this.props.closeInformationFollower()}>
                    <svg height="15pt" viewBox="0 0 512 512" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"/><path d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"/><path d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"/></svg>
                </button>
                <div className='information__follower'>
                <div className="cart__name">login: {informations.login}</div>
                    <img className='img__follower'src={informations.avatar_url} alt=""/>
                    <div className="cart__name">company name: {informations.company === null ? 
                        <div>User doesn't have information about company</div> :
                        informations.company
                    } </div>
                    <div className="cart__name">location: {
                    informations.company === null ? 
                        <div>User doesn't have information about location</div> :
                        informations.company
                    }</div>
                    <div className="cart__name">repos: {informations.public_repos}</div>
                    <div className="cart__name">followers: {informations.followers} </div>
                    <div className="cart__name">Profile created at: {informations.created_at} </div>
                </div> {/* ./information__follower */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        informations: state.informations,
        choosenUser: null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        informationAboutFollowerFetchData: url => dispatch(informationAboutFollowerFetchData(url)),  
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InformationAboutFollower)
