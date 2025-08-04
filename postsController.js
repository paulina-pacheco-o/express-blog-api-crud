const posts = require('./routers/posts.js');

//INDEX
const index = (req, res) => {
  res.json(posts)
}

//SHOW
const show = (req, res) => {
  const id = req.params.id

  const post = post.find(item => item.id === id);

  res.json(post);
}

//STORE
const store = (req, res) => {
  res.send('Creazione di un nuovo post')
}

//UPDATE
const update = (req, res) => {

}

//MODIFY
const modify = (req, res) => {

}

//DESTROY
const destroy = (req, res) => {

}