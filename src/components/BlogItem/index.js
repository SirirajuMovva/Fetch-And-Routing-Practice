// Write your JS code here
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItemDetails

  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div>
          <img src={imageUrl} alt={`imageUrl${id}`} />
          <div>
            <p>{topic}</p>
            <h1>{title}</h1>
            <div>
              <img src={avatarUrl} alt={`avatar${id}`} />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
