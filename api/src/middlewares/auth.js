const jwt = require("jsonwebtoken");

const SEGREDO = "chave_secreta";

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ mensagem: "Token não fornecido" });
  }

  const [, token] = authHeader.split(" ");

  try {
    jwt.verify(token, SEGREDO);
    next();
  } catch (err) {
    return res.status(401).json({ mensagem: "Token inválido ou expirado" });
  }
}

module.exports = autenticar;
