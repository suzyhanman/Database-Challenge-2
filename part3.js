//Total Number of Books per Genre: Group the books by genre and count how many books exist in each genre.
db.books.aggregate([
  {
    $group: {
      _id: "$genreId",
      totalBooks: { $sum: 1 },
    },
  },
  {
    $lookup: {
      from: "genres",
      localField: "_id",
      foreignField: "_id",
      as: "genreDetails",
    },
  },
  {
    $unwind: "$genreDetails",
  },
  {
    $project: {
      _id: 0,
      genre: "$genreDetails.name",
      totalBooks: 1,
    },
  },
]);

//Average Rating of Each Book: Calculate the average rating for each book based on the reviews.
db.books.aggregate([
  {
    $project: {
      title: 1,
      averageRating: { $avg: "$reviews.rating" },
    },
  },
]);

//Top 3 Authors by Number of Books: Find the authors with the most books published and return their names along with the count.
db.books.aggregate([
  {
    $group: {
      _id: "$authorId",
      bookCount: { $sum: 1 },
    },
  },
  {
    $lookup: {
      from: "authors",
      localField: "_id",
      foreignField: "_id",
      as: "authorDetails",
    },
  },
  {
    $unwind: "$authorDetails",
  },
  {
    $sort: { bookCount: -1 },
  },
  {
    $limit: 3, // Limit to top 3 authors
  },
  {
    $project: {
      _id: 0, // Exclude the default _id field
      name: "$authorDetails.name", // Include author name
      bookCount: 1, // Include count of books
    },
  },
]);
