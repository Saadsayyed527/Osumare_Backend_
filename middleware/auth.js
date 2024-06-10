// Creating Authorization using JWT 
const jwt = require('jsonwebtoken');

// SECRET_KEY create it and make your key 
const secret = process.env.SECRET_KEY ||"jk123";

exports.authenticateToken = (req, res, next) => {
  const Authheader = req.headers['authorization'];
  
  const token = Authheader && Authheader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }



  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
};

exports.generateToken = (req, res) => {
  const {username} = req.body;


  if (!username) {
    return res.status(400).json({ error:'Username is required' });
  }
  const token = jwt.sign({username}, secret, {expiresIn: '1h' });
  res.status(200).json({token});
};
