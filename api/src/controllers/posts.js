const dataPosts = require("../data/posts");

const posts = (req, res) => {
  const postsFormatados = dataPosts.map(post => ({
    titulo: post.title,
    texto: post.summary,
    data: post.date,
    curtidas: post.likes,
    visualizacoes: post.views
  }));

  res.status(200).json(postsFormatados);
};

module.exports = { posts };
