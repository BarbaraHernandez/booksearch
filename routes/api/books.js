const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// all books (/api/books)
router
  .route("/books")
  .get(bookController.findAll)
  .post(bookController.create);


// books by id (/api/books/:id)
router
  .route("/books/:id")
  .delete(bookController.remove);

module.exports = router;
