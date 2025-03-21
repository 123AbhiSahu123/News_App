import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <>
                <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                    <div className="card">
                        <img src={this.props.pic} className="card-img-top" height="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title.slice(0,40)+"..."}</h5>
                            <h5 className='card-source'>{this.props.source.name}</h5>
                            <h5 className='card-date'>{new Date(this.props.date).toLocaleDateString()}</h5>
                            <hr></hr>
                            <p className="card-text">{this.props.description.slice(0,130)+"..."}</p>
                            <a href="#" className="btn btn-primary w-100 btn-sm">Read full article</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
