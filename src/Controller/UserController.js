const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const User = mongoose.model("User");

    const { email, password, name, addres, city, uf } = req.body;

    await User.findOne({ email: email })
      .then(user => {
        if (user) {
          res.json({ msg: "email já existe" });
        }
      })
      .catch(error =>
        res.status(400).send("erro no sistema tente mais tarde :(")
      );

    bcrypt.hash(password, 10, async (error, hash) => {
      if (error) {
        console.log(error);
      }
      const password = hash;

      await User.create({ email, password, name, addres, city, uf });

      return res.json({ name, email });
    });
  },

  index(req, res) {
    const User = mongoose.model("User");

    User.find()
      .then(results => res.json(results))
      .catch(err => res.send(err));
  },

  async store(req, res) {
    const User = mongoose.model("User");
    const { email, password } = req.body;


    await User.findOne({ email: email })
      .select("+password")
      .then(user => {
        if (!user) {
          return res.status(400).json({ msg: "crie sua conta" });
        }
        const passwordUser = user.password;
        bcrypt.compare(password, passwordUser).then(user => {
          if (user) {
            res.status(200).send("senha correta");
          } else {
            res.status(401).send("senha incorreta");
          }
        });
      })
      .catch(error =>
        res.status(400).json({messege:"erro no sistema tente mais tarde :("})
      );
      return res.json('ola')
  }
};
