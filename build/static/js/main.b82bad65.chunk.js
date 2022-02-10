(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{16:function(e,t,a){e.exports=a(32)},21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),c=(a(21),a(1)),s=a(2),i=a(5),u=a(3),m=a(6),f=a(4);function h(e){return function(t){fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"PERSONS_FETCH_DATA_SUCCESS",users:e}}(e))}))}}function w(e){return function(t){fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"FOLLOWERS_FETCH_DATA_SUCCESS",followers:e}}(e))}))}}a(28);var p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showFollowers:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.users;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"cart"},o.a.createElement("div",{className:"cart__user-title"},o.a.createElement("div",{className:""},o.a.createElement("div",{className:"cart__name"},"Login of user: ",t.login),o.a.createElement("div",{className:"cart__name"},"Profile created at: ",t.created_at),o.a.createElement("div",{className:"cart__name"},"Following: ",t.following),o.a.createElement("div",{className:"cart__name"},"Repos: ",t.public_repos),o.a.createElement("div",{className:"cart__name"},"Company: ",null===t.company?o.a.createElement("div",null,"User doesn't have information about company"):t.company),o.a.createElement("div",{className:"cart__name"},"location: ",null===t.company?o.a.createElement("div",null,"User doesn't have information about location"):t.company),o.a.createElement("img",{className:"cart__img",src:t.avatar_url,alt:""})),o.a.createElement("button",{className:"btn__followers",onClick:function(){return e.props.submitFollowers()}},"Followers of user : ",t.followers))," ")," ")}}]),t}(n.Component),E=Object(f.b)((function(e){return{users:e.users}}),(function(e){return{usersFetchData:function(t){return e(h(t))}}}))(p);function d(e){return function(t){fetch(e).then((function(e){if(!e.ok)throw new Error(e.statusText);return e})).then((function(e){return e.json()})).then((function(e){return t(function(e){return{type:"INFORMATIONS_FETCH_DATA_SUCCESS",informations:e}}(e))}))}}a(29);var b=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.informations;return o.a.createElement("div",{classname:"information"},o.a.createElement("button",{className:"btn btn__close-information",onClick:function(){return e.props.closeInformationFollower()}},o.a.createElement("svg",{height:"15pt",viewBox:"0 0 512 512",width:"15pt",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0"}),o.a.createElement("path",{d:"m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0"}),o.a.createElement("path",{d:"m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0"}))),o.a.createElement("div",{className:"information__follower"},o.a.createElement("div",{className:"cart__name"},"login: ",t.login),o.a.createElement("img",{className:"img__follower",src:t.avatar_url,alt:""}),o.a.createElement("div",{className:"cart__name"},"company name: ",null===t.company?o.a.createElement("div",null,"User doesn't have information about company"):t.company," "),o.a.createElement("div",{className:"cart__name"},"location: ",null===t.company?o.a.createElement("div",null,"User doesn't have information about location"):t.company),o.a.createElement("div",{className:"cart__name"},"repos: ",t.public_repos),o.a.createElement("div",{className:"cart__name"},"followers: ",t.followers," "),o.a.createElement("div",{className:"cart__name"},"Profile created at: ",t.created_at," "))," ")}}]),t}(n.Component),_=Object(f.b)((function(e){return{informations:e.informations,choosenUser:null}}),(function(e){return{informationAboutFollowerFetchData:function(t){return e(d(t))}}}))(b),v=(a(30),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showInformationFollower:!1,sortType:"asc"},a.submitInformationAboutFollower=function(e){a.setState({choosenUser:e.target.name}),setTimeout(a.showInformationAboutFollower,500),setTimeout(a.showInformationSubmitTest,1e3)},a.showInformationSubmitTest=function(e){a.setState({showInformationFollower:!0})},a.showInformationAboutFollower=function(){a.props.informationAboutFollowerFetchData("https://api.github.com/users/".concat(a.state.choosenUser))},a.onSort=function(e){a.setState({sortType:e})},a.closeInformationFollower=function(){a.setState({showInformationFollower:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.followers,a=this.state.sortType,n=t.sort((function(e,t){return("asc"===a?1:-1)*e.login.localeCompare(t.login)}));return o.a.createElement("div",{className:"follower"},o.a.createElement("div",{className:"sorted"},o.a.createElement("div",{className:""},o.a.createElement("button",{className:"btn__sort-name",onClick:function(){return e.onSort("asc")}},"sort a-z")),o.a.createElement("div",{className:""},o.a.createElement("button",{className:"btn__sort-name",onClick:function(){return e.onSort("desc")}},"sort z-a"))),o.a.createElement("div",{className:"follower__intro"},n.map((function(t){return o.a.createElement("div",{className:"follower__list",key:t.id},o.a.createElement("button",{className:"btn__followers",id:t.id,onClick:e.submitInformationAboutFollower,name:t.login},t.login))}))),o.a.createElement("div",{className:"follower__information"},this.state.showInformationFollower?o.a.createElement(_,{closeInformationFollower:function(){return e.closeInformationFollower()}}):null))}}]),t}(n.Component)),F=Object(f.b)((function(e){return{followers:e.followers,informations:e.informations,choosenUser:null,followerInput:null}}),(function(e){return{followersFetchData:function(t){return e(w(t))},informationAboutFollowerFetchData:function(t){return e(d(t))}}}))(v),S=(a(31),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showInformationFollower:!1,followerSearchError:!0},a.handleSearchFollower=function(e){a.setState({followerInput:e.target.value})},a.handleEnterFollower=function(e){"Enter"===e.key&&a.handleSubmitFollower()},a.handleSubmitFollower=function(e){var t=a.props.followers.filter((function(e){return-1!==e.login.indexOf(a.state.followerInput)})).map((function(e){return e.login})).toString();if(a.state.followerInput===t)setTimeout(a.showInformationAboutFollower,500),setTimeout(a.setState({showInformationFollower:!0}),1e3),a.setState({followerSearchError:!0});else if(null!==a.state.followerInput&&a.state.followerInput!==t)return a.setState({followerSearchError:!1})},a.showInformationAboutFollower=function(){a.props.informationAboutFollowerFetchData("https://api.github.com/users/".concat(a.state.followerInput))},a.closeInformationFollower=function(){a.setState({showInformationFollower:!1})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"search search__followers"},o.a.createElement("div",{className:"search__intro"},o.a.createElement("input",{type:"text",onChange:this.handleSearchFollower,onKeyPress:this.handleEnterFollower,placeholder:"Search follower of user",className:"search__input search__input-followers"}),o.a.createElement("button",{className:"btn btn__search",onClick:this.handleSubmitFollower},o.a.createElement("svg",{height:"20",viewBox:"0 0 256 256",width:"20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"m178.843 204.411a2.5 2.5 0 0 1 -1.768-4.267l23.069-23.069a2.5 2.5 0 0 1 3.535 3.535l-23.069 23.069a2.49 2.49 0 0 1 -1.767.732z",fill:"#f9b087"}),o.a.createElement("path",{d:"m171.136 196.7a2.5 2.5 0 0 1 -1.767-4.267l23.068-23.068a2.5 2.5 0 0 1 3.535 3.535l-23.072 23.072a2.493 2.493 0 0 1 -1.764.728z",fill:"#f9b087"}),o.a.createElement("path",{d:"m224.844 198.242-33.785-33.786a13.39 13.39 0 0 0 -18.914 0l-7.689 7.688a13.376 13.376 0 0 0 0 18.916l33.785 33.785a13.389 13.389 0 0 0 18.915 0l7.689-7.688a13.374 13.374 0 0 0 0-18.915zm-3.535 15.379-7.689 7.688a8.385 8.385 0 0 1 -11.845 0l-33.784-33.786a8.375 8.375 0 0 1 0-11.844l7.689-7.688a8.385 8.385 0 0 1 11.844 0l33.785 33.786a8.375 8.375 0 0 1 0 11.844z",fill:"#846f75"}),o.a.createElement("path",{d:"m151.667 163.509a2.5 2.5 0 0 0 -3.263-.235 72.715 72.715 0 1 1 14.869-14.87 2.5 2.5 0 0 0 .236 3.263l4.917 4.916a2.5 2.5 0 0 0 3.535-3.536l-3.408-3.407a77.7 77.7 0 1 0 -18.913 18.913l3.408 3.408a2.5 2.5 0 0 0 3.535-3.536z",fill:"#846f75"}),o.a.createElement("path",{d:"m104.957 46.609a58.348 58.348 0 1 0 58.343 58.348 58.414 58.414 0 0 0 -58.343-58.348zm0 111.7a53.348 53.348 0 1 1 53.343-53.352 53.408 53.408 0 0 1 -53.343 53.343z",fill:"#846f75"}),o.a.createElement("path",{d:"m105.755 151.27a46.833 46.833 0 1 1 33.145-13.706 46.723 46.723 0 0 1 -33.145 13.706zm0-88.716a41.869 41.869 0 1 0 29.606 12.263 41.6 41.6 0 0 0 -29.606-12.263z",fill:"#ebe7f2"}),o.a.createElement("g",{fill:"#f9b087"},o.a.createElement("path",{d:"m105.361 127.61c-19.667 0-35.09-20.852-35.737-21.739a2.5 2.5 0 0 1 0-2.946c.647-.887 16.07-21.739 35.737-21.739s35.091 20.852 35.738 21.739a2.5 2.5 0 0 1 0 2.946c-.647.887-16.071 21.739-35.738 21.739zm-30.533-23.21c3.77 4.573 16.219 18.214 30.533 18.214 14.347 0 26.77-13.636 30.534-18.21-3.77-4.573-16.22-18.214-30.534-18.214-14.347-.004-26.77 13.632-30.533 18.21z"}),o.a.createElement("path",{d:"m105.361 117.013a2.5 2.5 0 0 1 -2.5-2.5v-20.23a2.5 2.5 0 0 1 5 0v20.23a2.5 2.5 0 0 1 -2.5 2.5z"}),o.a.createElement("path",{d:"m115.477 106.9h-20.231a2.5 2.5 0 0 1 0-5h20.231a2.5 2.5 0 0 1 0 5z"})))),o.a.createElement(F,null)),o.a.createElement("div",{className:"Error__message ".concat(this.state.followerSearchError?"followerSearchError":null)},"It's not a follower of this user"),this.state.showInformationFollower?o.a.createElement(_,{closeInformationFollower:function(){return e.closeInformationFollower()}}):null))}}]),t}(n.Component)),g=Object(f.b)((function(e){return{followerInput:null,followers:e.followers,informations:e.informations}}),(function(e){return{followersFetchData:function(t){return e(w(t))},informationAboutFollowerFetchData:function(t){return e(d(t))}}}))(S),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSearch=function(e){a.setState({userInput:e.target.value})},a.handleEnter=function(e){"Enter"===e.key&&a.handleSubmit()},a.handleSubmit=function(){a.props.usersFetchData("https://api.github.com/users/".concat(a.state.userInput)),a.setState({showUser:!0})},a.submitFollowers=function(){var e=a.state.userInput;a.props.followersFetchData("https://api.github.com/users/".concat(e,"/followers")),setTimeout(a.setState({showFollowers:!a.state.showFollowers}),500)},a.state={userInput:"",showFollowers:!1,showUser:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"search"},o.a.createElement("div",{className:"search__intro"},o.a.createElement("input",{type:"text",onChange:this.handleSearch,onKeyPress:this.handleEnter,placeholder:"Search github profile",className:"search__input"}),o.a.createElement("button",{className:"btn btn__search",onClick:this.handleSubmit},o.a.createElement("svg",{height:"20",viewBox:"0 0 256 256",width:"20",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"m178.843 204.411a2.5 2.5 0 0 1 -1.768-4.267l23.069-23.069a2.5 2.5 0 0 1 3.535 3.535l-23.069 23.069a2.49 2.49 0 0 1 -1.767.732z",fill:"#f9b087"}),o.a.createElement("path",{d:"m171.136 196.7a2.5 2.5 0 0 1 -1.767-4.267l23.068-23.068a2.5 2.5 0 0 1 3.535 3.535l-23.072 23.072a2.493 2.493 0 0 1 -1.764.728z",fill:"#f9b087"}),o.a.createElement("path",{d:"m224.844 198.242-33.785-33.786a13.39 13.39 0 0 0 -18.914 0l-7.689 7.688a13.376 13.376 0 0 0 0 18.916l33.785 33.785a13.389 13.389 0 0 0 18.915 0l7.689-7.688a13.374 13.374 0 0 0 0-18.915zm-3.535 15.379-7.689 7.688a8.385 8.385 0 0 1 -11.845 0l-33.784-33.786a8.375 8.375 0 0 1 0-11.844l7.689-7.688a8.385 8.385 0 0 1 11.844 0l33.785 33.786a8.375 8.375 0 0 1 0 11.844z",fill:"#846f75"}),o.a.createElement("path",{d:"m151.667 163.509a2.5 2.5 0 0 0 -3.263-.235 72.715 72.715 0 1 1 14.869-14.87 2.5 2.5 0 0 0 .236 3.263l4.917 4.916a2.5 2.5 0 0 0 3.535-3.536l-3.408-3.407a77.7 77.7 0 1 0 -18.913 18.913l3.408 3.408a2.5 2.5 0 0 0 3.535-3.536z",fill:"#846f75"}),o.a.createElement("path",{d:"m104.957 46.609a58.348 58.348 0 1 0 58.343 58.348 58.414 58.414 0 0 0 -58.343-58.348zm0 111.7a53.348 53.348 0 1 1 53.343-53.352 53.408 53.408 0 0 1 -53.343 53.343z",fill:"#846f75"}),o.a.createElement("path",{d:"m105.755 151.27a46.833 46.833 0 1 1 33.145-13.706 46.723 46.723 0 0 1 -33.145 13.706zm0-88.716a41.869 41.869 0 1 0 29.606 12.263 41.6 41.6 0 0 0 -29.606-12.263z",fill:"#ebe7f2"}),o.a.createElement("g",{fill:"#f9b087"},o.a.createElement("path",{d:"m105.361 127.61c-19.667 0-35.09-20.852-35.737-21.739a2.5 2.5 0 0 1 0-2.946c.647-.887 16.07-21.739 35.737-21.739s35.091 20.852 35.738 21.739a2.5 2.5 0 0 1 0 2.946c-.647.887-16.071 21.739-35.738 21.739zm-30.533-23.21c3.77 4.573 16.219 18.214 30.533 18.214 14.347 0 26.77-13.636 30.534-18.21-3.77-4.573-16.22-18.214-30.534-18.214-14.347-.004-26.77 13.632-30.533 18.21z"}),o.a.createElement("path",{d:"m105.361 117.013a2.5 2.5 0 0 1 -2.5-2.5v-20.23a2.5 2.5 0 0 1 5 0v20.23a2.5 2.5 0 0 1 -2.5 2.5z"}),o.a.createElement("path",{d:"m115.477 106.9h-20.231a2.5 2.5 0 0 1 0-5h20.231a2.5 2.5 0 0 1 0 5z"}))))))," ",this.state.showUser?o.a.createElement(E,{submitFollowers:function(){return e.submitFollowers()}}):null,this.state.showFollowers?o.a.createElement(g,null):null)}}]),t}(n.Component),N=Object(f.b)((function(e){return{users:e.users}}),(function(e){return{usersFetchData:function(t){return e(h(t))},followersFetchData:function(t){return e(w(t))}}}))(O),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(N,null))}}]),t}(n.Component),j=a(7),I=a(14),C=a(15);var z=Object(j.combineReducers)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PERSONS_FETCH_DATA_SUCCESS":return t.users;default:return e}},followers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOWERS_FETCH_DATA_SUCCESS":return t.followers;default:return e}},informations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INFORMATIONS_FETCH_DATA_SUCCESS":return t.informations;default:return e}},searchFollowers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_FOLLOWERS_FETCH_DATA_SUCCESS":return t.searchFollowers;default:return e}}}),A=Object(j.createStore)(z,Object(C.composeWithDevTools)(Object(j.applyMiddleware)(I.a)));l.a.render(o.a.createElement(f.a,{store:A},o.a.createElement(y,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b82bad65.chunk.js.map