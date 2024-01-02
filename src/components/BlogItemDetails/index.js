import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      imageUrl: data.image_url,
      authorUrl: data.avatar_url,
      topic: data.topic,
      content: data.content,
    }
    console.log(updatedData)
    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {title, author, authorUrl, imageUrl, content} = blogItem
    return (
      <div className="eachBlogContainer">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="each">
            <h1 className="eachBlogHeading">{title}</h1>
            <div className="authorContainer">
              <img src={authorUrl} className="authorImg" alt="title" />
              <p className="AuthorPara">{author}</p>
            </div>
            <img src={imageUrl} className="eachBlogImg" alt={title} />
            <p className="blogEachPara">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
