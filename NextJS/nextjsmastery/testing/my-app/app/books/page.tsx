import { books } from "../api/db";
import {
  addBook,
  deleteBook,
  updateBook,
} from "./actions";

export default async function Home() {
  return (
    <div>
      <h1>Server Side CRUD</h1>

      <form action={addBook}>
        <input
          name="title"
          placeholder="Book Title"
        />

        <button type="submit">
          Add Book
        </button>
      </form>

      <hr />

      {books.map((book) => (
        <div key={book.id}>
          {book.title}

          <form action={updateBook}>
            <input
              type="hidden"
              name="id"
              value={book.id}
            />

            <button type="submit">
              Update
            </button>
          </form>

          <form action={deleteBook}>
            <input
              type="hidden"
              name="id"
              value={book.id}
            />

            <button type="submit">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}