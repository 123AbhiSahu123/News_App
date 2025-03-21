import React, { Component, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language: "hi",
      search: ""
    }
  }

  changeLangauge = (data) => {
    this.setState({ language: data })
  }

  changeSearch = (data) => {
    this.setState({ search: data })
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar changeLangauge={this.changeLangauge} changeSearch={this.changeSearch} />
          <Routes>
            <Route path='/' element={<Home  search={this.state.search} language={this.state.language} q="All" />} />
            <Route path='/politics' element={<Home  search={this.state.search} language={this.state.language} q="Politics" />} />
            <Route path='/education' element={<Home  search={this.state.search} language={this.state.language} q="Education" />} />
            <Route path='/science' element={<Home  search={this.state.search} language={this.state.language} q="Science" />} />
            <Route path='/crime' element={<Home  search={this.state.search} language={this.state.language} q="Crime" />} />
            <Route path='/technology' element={<Home  search={this.state.search} language={this.state.language} q="Technology" />} />
            <Route path='/Sport' element={<Home  search={this.state.search} language={this.state.language} q="Sport" />} />
            <Route path='/Cricket' element={<Home  search={this.state.search} language={this.state.language} q="Cricket" />} />
            <Route path='/Olympics' element={<Home  search={this.state.search} language={this.state.language} q="Olympics" />} />
            <Route path='/Entertainment' element={<Home  search={this.state.search} language={this.state.language} q="Entertainment" />} />
            <Route path='/IT' element={<Home  search={this.state.search} language={this.state.language} q="IT" />} />
            <Route path='/Health' element={<Home  search={this.state.search} language={this.state.language} q="Health" />} />
            <Route path='/Economics' element={<Home  search={this.state.search} language={this.state.language} q="Economics" />} />
            <Route path='/World' element={<Home  search={this.state.search} language={this.state.language} q="World" />} />
            <Route path='/India' element={<Home  search={this.state.search} language={this.state.language} q="India" />} />
            <Route path='/Corporate' element={<Home  search={this.state.search} language={this.state.language} q="Corporate" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}
