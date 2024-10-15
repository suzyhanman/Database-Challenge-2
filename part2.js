db = connect("mongodb://localhost:27017/Bookstore");

const authorsCollection = db.collection("authors");
const genresCollection = db.collection("genres");
const booksCollection = db.collection("books");
const customersCollection = db.collection("customers");

// Sample Authors
const authors = [
  {
    name: "Author 1",
    biography: "Biography of Author 1",
    nationality: "American",
  },
  {
    name: "Author 2",
    biography: "Biography of Author 2",
    nationality: "British",
  },
  {
    name: "Author 3",
    biography: "Biography of Author 3",
    nationality: "Canadian",
  },
  {
    name: "Author 4",
    biography: "Biography of Author 4",
    nationality: "Indian",
  },
  {
    name: "Author 5",
    biography: "Biography of Author 5",
    nationality: "Chinese",
  },
];
await authorsCollection.insertMany(authors);

// Sample Genres
const genres = [
  { name: "Fiction" },
  { name: "Romance" },
  { name: "Fantasy" },
  { name: "Poetry" },
  { name: "Horror" },
];
await genresCollection.insertMany(genres);

//get the author ids
const author1Id = db.authors.findOne({ name: "Author 1" }, { _id: 1 });
const author2Id = db.authors.findOne({ name: "Author 2" }, { _id: 1 });
const author3Id = db.authors.findOne({ name: "Author 3" }, { _id: 1 });
const author4Id = db.authors.findOne({ name: "Author 4" }, { _id: 1 });
const author5Id = db.authors.findOne({ name: "Author 5" }, { _id: 1 });

//get the genre ids
const genre1Id = db.genres.findOne({ name: "Fiction" }, { _id: 1 });
const genre2Id = db.genres.findOne({ name: "Romance" }, { _id: 1 });
const genre3Id = db.genres.findOne({ name: "Fantasy" }, { _id: 1 });
const genre4Id = db.genres.findOne({ name: "Poetry" }, { _id: 1 });
const genre5Id = db.genres.findOne({ name: "Horror" }, { _id: 1 });

// Sample Books
const books = [
  {
    title: "Book 1",
    authorId: ObjectId("author1Id"),
    genreId: ObjectId("gettnre1Id"),
    isbn: "1234567890123",
    publicationYear: 2000,
    price: 15.99,
    ratings: { average: 4.5, count: 10 },
    reviews: [],
  },
  {
    title: "Book 2",
    authorId: ObjectId("author1Id"),
    genreId: ObjectId("genre2Id"),
    isbn: "1234567890124",
    publicationYear: 2001,
    price: 12.99,
    ratings: { average: 4.0, count: 5 },
    reviews: [],
  },
  {
    title: "Book 3",
    authorId: ObjectId("author2Id"),
    genreId: ObjectId("genre3Id"),
    isbn: "1234567890125",
    publicationYear: 2002,
    price: 19.99,
    ratings: { average: 5.0, count: 8 },
    reviews: [],
  },
  {
    title: "Book 4",
    authorId: ObjectId("author3Id"),
    genreId: ObjectId("genre1Id"),
    isbn: "1234567890126",
    publicationYear: 2003,
    price: 17.99,
    ratings: { average: 3.5, count: 2 },
    reviews: [],
  },
  {
    title: "Book 5",
    authorId: ObjectId("author4Id"),
    genreId: ObjectId("genre2Id"),
    isbn: "1234567890127",
    publicationYear: 2004,
    price: 14.99,
    ratings: { average: 4.8, count: 12 },
    reviews: [],
  },
];
await booksCollection.insertMany(books);

// Sample Customers
const customers = [
  { name: "Customer 1", email: "customer1@gmail.com", purchaseHistory: [] },
  { name: "Customer 2", email: "customer2@gmail.com", purchaseHistory: [] },
  { name: "Customer 3", email: "customer3@gmail.com", purchaseHistory: [] },
  { name: "Customer 4", email: "customer4@gmail.com", purchaseHistory: [] },
  { name: "Customer 5", email: "customer5@gmail.com", purchaseHistory: [] },
];
await customersCollection.insertMany(customers);
