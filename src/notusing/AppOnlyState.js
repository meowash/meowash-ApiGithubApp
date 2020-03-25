import React, { Component } from 'react'
import { connect } from 'react-redux'
import { personFetchdata } from "../actions/persons";

import './app.scss'
import './header.scss'
import './cart.scss'

class Follower extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [{}],
            userInput: null,
            error: false,
            followersPeople: []
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.submitFollowers = this.submitFollowers.bind(this);
    }

    handleSearch(e) {
        this.setState({userInput : e.target.value})
      }

     handleEnter = (e) => {
        if(e.key ==='Enter') this.handleSubmit();
      }
    
    handleSubmit = () => {
        fetch(`https://api.github.com/users/${this.state.userInput}`)
        .then(res => res.json())
        .then(user => {
          if (user.message) {
              this.setState({error: true})
          } else {
              this.setState({user: user})
              this.setState({error: false})
          }
          console.log(user)
        })
      }

    async submitFollowers()  {
        const url = `https://api.github.com/users/${this.state.userInput}/followers`
        const responce =  await fetch(url)
        const data =  await responce.json()
        this.setState({followersPeople: data})
        console.log(data)
    }

    async submitFollowersMoreInformation() {
      const url = `https://api.github.com/users/${this.state.userInput}/followers/`
        const responce =  await fetch(url)
        const data =  await responce.json()
        this.setState({followersPeople: data})
        console.log(data)
    }

  render() {
    return (
      <>
        <div className="header">
            <div className="header__scroll">
              <div className="header__title">Find information about github profile</div>
            </div>
        </div> {/* ./header */}

        <div className="App">
            <div className="search">
                <div className="search__intro">
                    <input type="text" onChange={this.handleSearch} onKeyPress={this.handleEnter} placeholder='Find github profile' className="search__input"/>
                    <button className="btn btn__search" onClick={this.handleSubmit}>
                        <svg height="20" viewBox="0 0 256 256" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m178.843 204.411a2.5 2.5 0 0 1 -1.768-4.267l23.069-23.069a2.5 2.5 0 0 1 3.535 3.535l-23.069 23.069a2.49 2.49 0 0 1 -1.767.732z" fill="#f9b087"/><path d="m171.136 196.7a2.5 2.5 0 0 1 -1.767-4.267l23.068-23.068a2.5 2.5 0 0 1 3.535 3.535l-23.072 23.072a2.493 2.493 0 0 1 -1.764.728z" fill="#f9b087"/><path d="m224.844 198.242-33.785-33.786a13.39 13.39 0 0 0 -18.914 0l-7.689 7.688a13.376 13.376 0 0 0 0 18.916l33.785 33.785a13.389 13.389 0 0 0 18.915 0l7.689-7.688a13.374 13.374 0 0 0 0-18.915zm-3.535 15.379-7.689 7.688a8.385 8.385 0 0 1 -11.845 0l-33.784-33.786a8.375 8.375 0 0 1 0-11.844l7.689-7.688a8.385 8.385 0 0 1 11.844 0l33.785 33.786a8.375 8.375 0 0 1 0 11.844z" fill="#846f75"/><path d="m151.667 163.509a2.5 2.5 0 0 0 -3.263-.235 72.715 72.715 0 1 1 14.869-14.87 2.5 2.5 0 0 0 .236 3.263l4.917 4.916a2.5 2.5 0 0 0 3.535-3.536l-3.408-3.407a77.7 77.7 0 1 0 -18.913 18.913l3.408 3.408a2.5 2.5 0 0 0 3.535-3.536z" fill="#846f75"/><path d="m104.957 46.609a58.348 58.348 0 1 0 58.343 58.348 58.414 58.414 0 0 0 -58.343-58.348zm0 111.7a53.348 53.348 0 1 1 53.343-53.352 53.408 53.408 0 0 1 -53.343 53.343z" fill="#846f75"/><path d="m105.755 151.27a46.833 46.833 0 1 1 33.145-13.706 46.723 46.723 0 0 1 -33.145 13.706zm0-88.716a41.869 41.869 0 1 0 29.606 12.263 41.6 41.6 0 0 0 -29.606-12.263z" fill="#ebe7f2"/><g fill="#f9b087"><path d="m105.361 127.61c-19.667 0-35.09-20.852-35.737-21.739a2.5 2.5 0 0 1 0-2.946c.647-.887 16.07-21.739 35.737-21.739s35.091 20.852 35.738 21.739a2.5 2.5 0 0 1 0 2.946c-.647.887-16.071 21.739-35.738 21.739zm-30.533-23.21c3.77 4.573 16.219 18.214 30.533 18.214 14.347 0 26.77-13.636 30.534-18.21-3.77-4.573-16.22-18.214-30.534-18.214-14.347-.004-26.77 13.632-30.533 18.21z"/><path d="m105.361 117.013a2.5 2.5 0 0 1 -2.5-2.5v-20.23a2.5 2.5 0 0 1 5 0v20.23a2.5 2.5 0 0 1 -2.5 2.5z"/><path d="m115.477 106.9h-20.231a2.5 2.5 0 0 1 0-5h20.231a2.5 2.5 0 0 1 0 5z"/></g></svg>
                    </button>
                </div>
            </div> {/* ./search */}
        

        { this.state.error ? (<h1> {this.error}</h1>
          ) : (
            <div className="cart">
                <div className="cart__user-title">
                    <div className="cart__name">Login of user: {this.state.user.login}</div>
                    <img className='cart__img' src={this.state.user.avatar_url} alt=""/>
                </div> 
                    <button className="btn btn__followers" onClick={this.submitFollowers}>Followers : {this.state.user.followers}</button>
                    <button className="btn btn__followers" >Repos : {this.state.user.public_repos}</button>
                <div className='followers'>
                    {this.state.followersPeople.map(user => (
                        <div className="followers__list">
                            <button className="btn__follower" onClick={this.submitFollowersMoreInformation}>{user.login}</button>
                            
                        </div>
                    ))}
                </div>   {/* ./followers */}
            </div>/* ./cart */
          )}

          </div> {/* ./App */}
      </>
    )
  }
}

export default Follower
