exports.login = (req, res) => {
  const { email, senha } = req.body;

  if (email === 'usuario@gmail.com' && senha === '123456') {
    return res.json({ token: 'seu-token-aqui' });
  }
  return res.status(401).json({ erro: 'Login inválido' });
};
