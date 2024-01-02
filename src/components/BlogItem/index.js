import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class BlogItem extends Component {
  render() {
    const {item} = this.props
    const {id, topic, title, author, authorUrl, imageUrl} = item
    return (
      <Link to={`/blogs/${id}`} className="link">
        <li className="listItem">
          <img src={imageUrl} alt="imageUrl" className="imgInBlogItem" />
          <div className="topicContainer">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="authorContainer">
              <img src={authorUrl} className="authorImg" alt="authorImg" />
              <p className="AuthorPara">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default BlogItem
