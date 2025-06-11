const { gerarToken } = require('../utils/token');

exports.login = (req, res) => {
  const { email, senha } = req.body;
  if (email === 'usuario@gmail.com' && senha === '123456') {
    const token = gerarToken({ email });
    return res.json({ token });
  }
  return res.status(401).json({ erro: 'Login inválido' });
};
