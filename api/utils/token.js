const jwt = require('jsonwebtoken');
const SECRET = 'sua_chave_secreta_aqui';

function gerarToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '2m' });
}

function validateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).json({ message: 'Token não fornecido' });
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token inválido' });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Token inválido ou expirado' });
    req.user = decoded;
    next();
  });
}

module.exports = { gerarToken, validateToken };
