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
  const id = req.params.id

  res.send(`Modifica totale del post con id ${id}`)
}

//MODIFY
const modify = (req, res) => {
  const id = req.params.id

  res.send(`Modifica parziale del post con id ${id}`)
}

//DESTROY
const destroy = (req, res) => {

}