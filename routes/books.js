const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, updateBookById } = require("../controllers/book-controller");


const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Description: Get all books
 * Access: Public
 * Parameters: None
 */

router.get("/", getAllBooks);

/**
 * Route: /:id
 * Method: GET
 * Description: Getting all books by id
 * Access: Public
 * Parameters: id
 */

router.get("/:id", getSingleBookById);

/**
 * Route: /books/issued/by-user 
 * Method: GET
 * Description: Get all issued books
 * Access: Public
 * Parameters: none
 */

router.get("/issued/by-user", getAllIssuedBooks);

/**
 * Route: /books
 * Method: POST
 * Description: Create new book
 * Access: Public
 * Parameters: none
 * Data: author, name, genre, price, publisher, id
 */

router.post("/",);

/**
 * Route: /books0/:id
 * Method: PUT
 * Description: Update book
 * Access: Public
 * Parameters: id
 * Data: author, name, genre, price, publisher, id
 */

router.put("/:id", updateBookById);

module.exports = router;