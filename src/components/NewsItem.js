import React from 'react'

const NewsItem = (props)=> {
        let {title, description, imageurl, newsurl, author, date, source} = props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageurl?"https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg":imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="badge rounded-pill bg-danger text-light">{source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {author? author: "unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="blank" className="btn btn-sm btn-dark">Read More &gt;</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
