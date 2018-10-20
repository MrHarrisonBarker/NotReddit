const User = require("../models/user.model");

exports.listAllUsers = (req, res) => {
    User.find({}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
};

exports.createUser = (req, res) => {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    })
};

exports.readUser = (req, res) => {
    User.findOne({DisplayName: req.params.username}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(user);
    });
};

exports.updateUser = (req, res) => {
    User.findOneAndUpdate(
        {DisplayName: req.params.username},
        req.body,
        function (err, place) {
            res.send(place);
        });
}

exports.deleteUser = (req, res) => {
    User.deleteOne({DisplayName: req.params.username}, (err, user) => {
        if (err) {
            res.status(500).send(err);
        }
        //res.status(200).json({ message: "Post {post} deleted" });
        res.status(200).json({message: "User deleted" + user});
    })
};