
// packages & libraries
import { useState } from 'react';

// styling 
import '../styles/App.css';

// component import
import HeaderSection from './HeaderSection.jsx';

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
        <ul className='blog-entry-list'>
          {blogEntries.map((blogEntry) => {
            return (
              <BlogEntry key={blogEntry.title} entries={blogEntries} />
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
