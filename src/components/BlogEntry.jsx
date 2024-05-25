
import '../styles/BlogEntry.css';

function BlogEntry({ title, author, date, contents }) {
  return (
    <li className='blog-entry'>
        <div>
            <h1>{title}</h1>
            <h2>By: {author}</h2>
            <h2>Date: {date}</h2>
        </div>
        <div className='entry-contents'>
            {contents.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
    </li>
  )
}

export default BlogEntry
