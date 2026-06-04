import books from "../db";

// GET ALL BOOKS
export async function GET() {
  return Response.json(books);
}

// ADD BOOK
export async function POST(request: Request) {
  const { title } = await request.json();

  const newBook = {
    id: books.length + 1,
    title,
  };

  books.push(newBook);

  return Response.json(newBook);
}

// UPDATE BOOK
export async function PUT(request: Request) {
  const { id, title } = await request.json();

  const book = books.find((b) => b.id === id);

  if (!book) {
    return Response.json(
      { message: "Book not found" },
      { status: 404 }
    );
  }

  book.title = title;

  return Response.json(book);
}

// DELETE BOOK
export async function DELETE(request: Request) {
  const { id } = await request.json();

  const index = books.findIndex(
    (b) => b.id === id
  );

  if (index === -1) {
    return Response.json(
      { message: "Book not found" },
      { status: 404 }
    );
  }

  books.splice(index, 1);

  return Response.json({
    message: "Deleted",
  });
}