const express = require('express');
const cors = require('cors');
const app = express();

const loginRoutes = require('./src/routes/login');
const postsRoutes = require('./src/routes/posts'); // importa rota dos posts

app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/posts', postsRoutes);  // usa rota posts em /posts

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
