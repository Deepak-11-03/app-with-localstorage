import React from 'react'
import './Form.css'

function AddBook({ bookDetails,handleInput,formReset,addBook,edit}) {
    
    
    const addNewBook =(e)=>{
      e.preventDefault()
      addBook(bookDetails)
      formReset()
      
    }
  return (
    <div className="form-container">
    <h2>Add New Book</h2>
    <form onSubmit={addNewBook}>
      <div className="textOnInput">
        <label htmlFor="inputText">Enter Book Title</label>
        <input
          type="text"
        name='title'
        autoFocus
        onChange={handleInput}
        value={bookDetails.title}
        required
        />
      </div>
      <div className="textOnInput">
        <label htmlFor="inputText">Enter Author Name</label>
        <input
          type="text"
          name='author'
          onChange={handleInput}
          value={bookDetails.author}
          required
        />
      </div>
      <div className="textOnInput">
        <label htmlFor="inputText">Enter ISBN no:</label>
        <input
          type="text"
          name='isbn'
          onChange={handleInput}
          value={bookDetails.isbn}
          required
        />
      </div>
      <div className="textOnInput">
        <label htmlFor="inputText">Enter Published Date</label>
        <input
          type="date"
          name='published'
          onChange={handleInput}
          value={bookDetails.published}
          required
        />
      </div>
      <button type='submit'>{edit ? "Update" :"Add Book"}</button>
    </form>
  </div>
  )
}

export default AddBook
