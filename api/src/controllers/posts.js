const dataPosts = require('../data/posts');

exports.posts = (req, res) => {
  const postsFormatados = dataPosts.map(post => ({
    title: post.title,
    summary: post.summary,
    date: post.date,
    likes: post.likes,
    views: post.views
  }));
  res.status(200).json(postsFormatados);
};
