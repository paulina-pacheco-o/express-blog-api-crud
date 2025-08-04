const posts = [
  {
    id: 1,
    titolo: "Italia",
    contenuto: "Lorem ipsum dolor",
    img: "/assets/italia.jpg",
    tags: ["italia", "lorem"],
  }, {
    id: 2,
    titolo: "Spagna",
    contenuto: "Lorem ipsum dolor",
    img: "/assets/spagna.jpg",
    tags: ["spagna", "lorem"],
  }, {
    id: 3,
    titolo: "Grecia",
    contenuto: "Lorem ipsum dolor",
    img: "/assets/grecia.jpg",
    tags: ["grecia", "lorem"],
  }, {
    id: 4,
    titolo: "Cuba",
    contenuto: "Lorem ipsum dolor",
    img: "/assets/cuba.jpg",
    tags: ["cuba", "lorem"],
  }, {
    id: 4,
    titolo: "Thailandia",
    contenuto: "Lorem ipsum dolor",
    img: "/assets/thailandia.jpg",
    tags: ["thailandia", "lorem"],
  }
];

//INDEX
const index = (req, res) => {
  res.json(posts)
}

//SHOW
const show = (req, res) => {
  const id = req.params.id

  const post = posts.find(item => item.id === id);
  console.log(id, post);

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
  const id = req.params.id

  const post = post.find(item => item.id === id);

  posts.splice(post.indexOf(post), 1);

  res.sendStatus(204);
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}