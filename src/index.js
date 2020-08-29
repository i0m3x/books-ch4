//we are rendering 3 Book components inside the Library Component - 3 kids for the parent

import React, { Component } from 'react'
import {render} from 'react-dom'

let bookList = [ //static book list - acts as a db
  {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 260},
  {"title": "Moby Dick", "author": "Herman Melville", "pages": 4800},
  {"title": "Catcher in the Rye", "author": "J.D. Salinger", "pages": 220}
]

const Book = ({title, author, pages, freeBookmark}) => { //this is where we PASS / unpack the props, unpacking is optional, and it helps make it more readable
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

const Hiring = () => 
  <div>
    <p>The library is hiring. Go to www.library.org for more.</p>
  </div>
const NotHiring = () =>
  <div>
    <p>The library is not hiring. Go to indeed.jobs for more.</p>
  </div>


class Library extends React.Component { //first step
  state = { 
    open: true,
    freeBookmark: true, 
    Hiring: false,
  }

  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  render() {

  const {books} = this.props //array of OBJECTS, but stored in an obj
  return (
    <div>
      {this.state.hiring ? <Hiring /> : <NotHiring />}
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>
      <button onClick={this.toggleOpenClosed}>Change</button>
      {books.map(
        (book, i) => //step, index - this 'i' is accessing the key below
          <Book //calling a Book component
          key={i} //this is the index
          title={book.title} //for each of these objects, we are feeding in all of these props into the Book above
          author={book.author} 
          pages={book.pages}
          freeBookmark={this.state.freeBookmark}/>
      )}
      
    </div>
    )
  }

}

render(
  <Library books={bookList} />,
  document.getElementById('root')
)
