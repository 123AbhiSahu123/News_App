import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component 
{
  constructor()
  {
    super()
    this.state={search:""}
  }

  getData(e)
  {
    this.setState({search:e.target.value})
  }

  postData(e)
  {
    e.preventDefault()
   this.props.changeSearch(this.state.search)
   this.setState({search:""})
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg background sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand text light" href="/">News_App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-light active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/politics">Politics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/education">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/crime">Crime</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/technology">Technology</a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link text-light dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Other News
                  </a>

                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/Sport">Sport</a></li>
                    <li><a className="dropdown-item" href="/Cricket">Cricket</a></li>
                    <li><a className="dropdown-item" href="/Olympics">Olympics</a></li>
                    <li><a className="dropdown-item" href="/Entertainment">Entertainment</a></li>
                    <li><a className="dropdown-item" href="/IT">IT</a></li>
                    <li><a className="dropdown-item" href="/Health">Health</a></li>
                    <li><a className="dropdown-item" href="/Economics">Economics</a></li>
                    <li><a className="dropdown-item" href="/World">World</a></li>
                    <li><a className="dropdown-item" href="/India">India</a></li>
                    <li><a className="dropdown-item" href="/Corporate">Corporate</a></li>
                  </ul>
                </li>

                <li className='nav-items dropdown'>
                  <a className='nav-link text-light dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded="false">
                    Language
                  </a>

                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" onClick={()=>this.props.changeLangauge('hi')}>Hindi</button></li>
                    <li><button className="dropdown-item" onClick={()=>this.props.changeLangauge('en')}>English</button></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" onSubmit={(e)=>this.postData(e)}>
                <input className="form-control me-2" type="search" placeholder="Search" 
                aria-label="Search" onChange={(e)=>this.getData(e)} value={this.state.search}/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
