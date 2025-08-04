const express = require('express')

const app = express();

app.use(express.static('public'))

const port = 3000

const postsRouter = require('./routers/posts.js');
console.log(postsRouter)

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  console.log('Server del mio blog')
})



app.get('/bacheca', (req, res) => {
  const post = [
    {
      titolo: "Italia",
      contenuto: "Lorem ipsum dolor",
      img: "/assets/italia.jpg",
      tags: ["italia", "lorem"],
    }, {
      titolo: "Spagna",
      contenuto: "Lorem ipsum dolor",
      img: "/assets/spagna.jpg",
      tags: ["spagna", "lorem"],
    }, {
      titolo: "Grecia",
      contenuto: "Lorem ipsum dolor",
      img: "/assets/grecia.jpg",
      tags: ["grecia", "lorem"],
    }, {
      titolo: "Cuba",
      contenuto: "Lorem ipsum dolor",
      img: "/assets/cuba.jpg",
      tags: ["cuba", "lorem"],
    }, {
      titolo: "Thailandia",
      contenuto: "Lorem ipsum dolor",
      img: "/assets/thailandia.jpg",
      tags: ["thailandia", "lorem"],
    }
  ];
  res.json(post)
})

app.listen(port, () => {
  console.log('Server del mio blog')
})