
// packages & libraries
import { useState } from 'react';

// styling 
import '../styles/App.css';

// component import
import HeaderSection from './HeaderSection.jsx';
import BlogEntry from './BlogEntry.jsx';

// example blog entry data
const exampleBlogEntries = [
  {
    title: 'React Native is Super Cool',
    author: 'Zach Palmer', 
    date: '5/24/2024',
    contents: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nam est mollitia voluptatibus adipisci nihil animi facere...`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nam est mollitia voluptatibus adipisci nihil animi facere 
      consequatur, sapiente aspernatur repudiandae maiores impedit...`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nam est mollitia voluptatibus adipisci nihil animi facere 
      consequatur, sapiente aspernatur repudiandae maiores impedit 
      voluptas non magnam pariatur necessitatibus quo laudantium? Minus?`
    ]
  },
  {
    title: 'Investigating the Influence of Neo-Liberalism on the Effective Number of Political Parties',
    author: 'Harvey Palmer', 
    date: '5/22/2024',
    contents: [
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nam est mollitia voluptatibus adipisci nihil animi facere 
      consequatur, sapiente aspernatur repudiandae maiores impedit...`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Nam est mollitia voluptatibus adipisci nihil animi facere...`,
      `Lorem ipsum dolor sit amet consectetur adipisicing elit.`
    ]
  }
]

function App() {
  // react states
  const [blogEntries, setBlogEntries] = useState(exampleBlogEntries);

  return (
    <div className='blog-container'>
      <HeaderSection />

      <main>
        <ul>
          {blogEntries.map((blogEntry, index) => {
            return (
              <BlogEntry 
                key={index} 
                title={blogEntry.title}
                author={blogEntry.author}
                date={blogEntry.date}
                contents={blogEntry.contents}
              />
            )
          })}
        </ul>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default App
