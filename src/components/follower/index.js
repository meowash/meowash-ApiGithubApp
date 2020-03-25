import React, { Component } from 'react'
import {connect} from 'react-redux'

import { followersFetchData } from "../../actions/followers"
import { informationAboutFollowerFetchData } from "../../actions/informationAboutFollower";
import InformationAboutFollower from '../information-about-follower'

import './follower.scss'

export class Followers extends Component {
    state = {
        showInformationFollower : false,
        sortType: 'asc',
    }

    submitInformationAboutFollower = (e) => {
        this.setState({choosenUser: e.target.name})
        setTimeout(this.showInformationAboutFollower,500)
        setTimeout(this.showInformationSubmitTest,1000)
    }
    showInformationSubmitTest = (e) => {
        this.setState ({ showInformationFollower : true})
    }
    showInformationAboutFollower = () => {
        this.props.informationAboutFollowerFetchData(`https://api.github.com/users/${this.state.choosenUser}`)
    }
    onSort = sortType => {
        this.setState({sortType})
    }
    closeInformationFollower = () => {
        this.setState({ showInformationFollower : false})
    }
        
    render() {
        const {followers} =this.props
        let {sortType} = this.state

        const sorted = followers.sort((a,b) => {
        const isReserved = (sortType === 'asc') ? 1 : -1 
        return isReserved * a.login.localeCompare(b.login)

        })

        return (
            <div className="follower">
                <div className="sorted">
                    <div className="">
                    <button className="btn__sort-name" onClick={() => this.onSort('asc')}>sort a-z</button>
                    </div>
                    <div className="">
                    <button className="btn__sort-name" onClick={() => this.onSort('desc')}>sort z-a</button>
                    </div>
                </div>

                <div className="follower__intro">
                {sorted.map((follower) => (
                    <div className="follower__list" key={follower.id}>
                        <button className="btn__followers"
                            id={follower.id}
                            onClick={this.submitInformationAboutFollower} 
                            name={follower.login}>
                            {follower.login}
                        </button>
                    </div>
                ))}
                </div>
                <div className="follower__information">
                        {this.state.showInformationFollower ? 
                        <InformationAboutFollower
                        closeInformationFollower={() => this.closeInformationFollower()}/> :
                        null
                        }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        followers: state.followers,
        informations: state.informations,
        choosenUser: null,
        followerInput: null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        followersFetchData: url => dispatch(followersFetchData(url)),
        informationAboutFollowerFetchData: url => dispatch(informationAboutFollowerFetchData(url)),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Followers)
