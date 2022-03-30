const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try{
    const { Totoro } = req.cookies;
    if(!Totoro) throw new Error('You must be signed in to continue');
    const payload = jwt.verify(Totoro, process.env.jwt_secret);
    req.user = payload;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
};
