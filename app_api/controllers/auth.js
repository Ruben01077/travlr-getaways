const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const JWT_SECRET = 'travlrSecretKey';


const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }

  try {
    const user = await User.findOne({ username }).exec();

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials (user)' });
    }

   
    if (user.password !== password) {
      console.log('DB password:', user.password, 'Incoming password:', password);
      return res.status(401).json({ message: 'Invalid credentials (password)' });
    }

    const token = jwt.sign(
      {
        username: user.username,
        name: user.name
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ token });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { login, JWT_SECRET };
