const Domain = require("../models/Domain");

exports.listAllDomains = (req, res) => {
    Domain.find({}, (err, domain) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(domain);
    });
};

exports.createDomain = (req, res) => {
    let newDomain = new Domain(req.body);
    newDomain.save((err, post) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(post);
    })
};

exports.readDomain = (req, res) => {
    Domain.findOne({Name: req.params.domainname}, (err, domain) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(domain);
    });
};

exports.updateDomain = (req, res) => {
    Domain.findOneAndUpdate(
        {_id: req.params.domainid},
        req.body,
        function (err, place) {
            res.send(place);
        });
}

exports.deleteDomain = (req, res) => {
    Domain.remove({ _id: req.params.domainid },(err, domain) => {
        if (err) {
            res.status(500).send(err);
        }
        //res.status(200).json({ message: "Post {post} deleted" });
        res.status(200).json({ message: "Post deleted" });
    })
};