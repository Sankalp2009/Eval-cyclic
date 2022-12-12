const {User} = require('./../model/User.model');
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { authentication } = require("../middleware/authentication");

exports.signup = async (req, res) => 
{ 
    const { email, password } = req.body;
    const isUser = await User.findOne({ email });
    if (isUser) {
      res.send("User already exist try logging in");
    } else {
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          res.send("something went wrong,please try again later");
        }
  
        const new_user = new User({
          email,
          password: hash,
        });
        try {
          await new_user.save();
          res.send({ msg: "signup success", new_user });
        } catch (err) {
          res.send("something went wrong please try again later ");
        }
      });
    } 
}
exports.login = async (req, res) => 
{
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const user_id = user._id;
    const hashed_password = user.password;
    console.log(user);
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (err) {
        res.send("something went wrong try again later");
      }
      const token = jwt.sign({ user_id: user_id }, process.env.SECRET_KEY);
      if (result) {
        res.send({ msg: "Login succesfull", token });
      } else {
        res.send("Login Failed");
      }
    });
}   