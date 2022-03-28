const { Author } = require('../models/author.model');

module.exports.index = (req, res) => {
  res.redirect('/api');
}

module.exports.welcome = (req, res) => {
  res.json({
    welcome: 'Welcome to the Authors API'
  });
}

module.exports.createAuthor = (req, res) => {
  const { name } = req.body;

  Author.create({
    name
  })
  .then(data => 
    res.json({
      author: data
    })
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.getAllAuthors = (req, res) => {
  Author.find({})
  .then(data => 
    res.json(data)
  )
  .catch(err =>
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.getAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
  .then(data =>
    res.json(data)
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.updateAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
  .then(data =>
    res.json(data)
  )
  .catch(err => 
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  );
}

module.exports.deleteAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
  .then(data =>
    res.json(data)
  )
  .catch(err =>
    res.status(500).json({
      message: 'Something went wrong',
      error: err
    })
  )
}