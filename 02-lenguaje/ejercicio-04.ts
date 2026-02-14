// Read Books
type Book = {
  title: string;
  isRead: boolean;
};

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: false },
];

const isBookRead = (books: Book[], titleToSearch: string) => {
  const bookReaded = books.find((book) => {
    return book.title === titleToSearch;
  });

  return bookReaded ? bookReaded.isRead : false;
};

console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devastación"));
