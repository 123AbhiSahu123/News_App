import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page:1
    }
  }

  getAPIData = async () => {
    var response = ""
    if (this.props.search)
      // var response = await fetch(`https://newsapi.org/v2/everything?q=all&language=hi&apiKey=8938c1513667424db6e6ca1272088e54`);
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=1&apiKey=8938c1513667424db6e6ca1272088e54`);
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=1&apiKey=8938c1513667424db6e6ca1272088e54`);
    var result = await response.json();
    this.setState({

      articles: result.articles,
      totalResults: result.totalResults
    })
    console.log(result)
  }

  fetchMoreData = async () => 
  {
    this.setState({page:this.state.page+1})
    var response = ""
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&apiKey=8938c1513667424db6e6ca1272088e54`);
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&apiKey=8938c1513667424db6e6ca1272088e54`);
    var result = await response.json();
    this.setState({articles:this.state.articles.concat(result.articles)})
    console.log(result)
  }


  componentDidMount() {
    this.getAPIData()
  }
  componentDidUpdate(oldProps) {
    if (this.props !== oldProps) {
      this.getAPIData()
    }
  }

  render() {
    return (
      <>
        <div className='container-fluid mt-2' style={{ marginBottom: '50px' }}>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./assets/images/news1.webp" className="d-block w-100" alt="..." style={{ height: "500px", width: "100%" }} />
              </div>
              <div className="carousel-item">
                <img src="./assets/images/news2.webp" className="d-block w-100" alt="..." style={{ height: "500px", width: "100%" }} />
              </div>
              <div className="carousel-item">
                <img src="./assets/images/news3.webp" className="d-block w-100" alt="..." style={{ height: "500px", width: "100%" }} />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className='container'>
          <h5 className='text-center mb-3 background text-light py-2'>{this.props.q} News Section</h5>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<h4>Loading...</h4>}
          >
            <div className='row'>
              {
                this.state.articles.map((item, index) => {
                  return <NewsItem
                    key={index}
                    name={item.name}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    source={item.source}
                    date={item.publishedAt}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}
