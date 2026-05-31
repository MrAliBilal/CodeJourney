import books from "../../db";

export async function PUT (request: Request, { params }: { params: { id: string } }) {
  const { title, author } = await request.json();
  const bookIndex = books.findIndex((book) => book.id === parseInt(params.id));
  if (bookIndex === -1) {
    return Response.json({ error: "Book not found" }, { status: 404 });
  }
  books[bookIndex] = { ...books[bookIndex], title, author };
  return Response.json(books[bookIndex]);
}

export async function DELETE (
    request: Request, { params }: { params: { id: string } }
) {
  const bookIndex = books.findIndex((book) => book.id === parseInt(params.id));
    if (bookIndex === -1) {
        return Response.json({ error: "Book not found" }, { status: 404 });
    }
    const deletedBook = books.splice(bookIndex, 1);
    return Response.json(deletedBook[0]);
}