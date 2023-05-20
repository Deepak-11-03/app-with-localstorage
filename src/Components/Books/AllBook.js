import React from "react";
import "./AllBook.css";
import { AiTwotoneEdit,AiTwotoneRest } from "react-icons/ai";

function AllBook({ books, deleteABook, editBook }) {
  return (
    <div className="books-container">
      <h2>All Book Section</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN no.</th>
            <th>Published Date</th>
            <th>Edit / Remove</th>
          </tr>
        </thead>

        <tbody>
          {books.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.isbn}</td>
                <td>{item.published}</td>
                <td id="modify">
                <AiTwotoneEdit onClick={() => editBook(item.id)}/>
                <AiTwotoneRest onClick={() => deleteABook(item.id)}/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {books.length === 0 &&
            <h3>No data Found</h3>
      }
    </div>
  );
}

export default AllBook;
