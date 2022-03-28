const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
  app.get('/', AuthorController.index);
  app.get('/api', AuthorController.welcome);
  app.post('/api/authors', AuthorController.createAuthor);
  app.get('/api/authors', AuthorController.getAllAuthors);
  app.get('/api/authors/:id', AuthorController.getAuthor);
  app.put('/api/authors/:id', AuthorController.updateAuthor);
  app.delete('/api/authors/:id', AuthorController.deleteAuthor);
}