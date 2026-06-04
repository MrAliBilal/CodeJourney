"use server";

import { books } from "../api/db";

export async function addBook(formData: FormData) {
  const title = formData.get("title") as string;

  books.push({
    id: books.length + 1,
    title,
  });
}

export async function deleteBook(formData: FormData) {
  const id = Number(formData.get("id"));

  const index = books.findIndex(
    (book) => book.id === id
  );

  if (index !== -1) {
    books.splice(index, 1);
  }
}

export async function updateBook(formData: FormData) {
  const id = Number(formData.get("id"));

  const book = books.find(
    (book) => book.id === id
  );

  if (book) {
    book.title = "Updated Book";
  }
}