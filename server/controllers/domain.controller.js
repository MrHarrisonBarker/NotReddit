const Domain = require("../models/domain.model");

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
    newDomain.save((err, domain) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(domain);
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
        {Name: req.params.domainname},
        req.body,
        function (err, place) {
            res.send(place);
        });
}

exports.deleteDomain = (req, res) => {
    Domain.deleteOne({ Name: req.params.domainname },(err, domain) => {
        if (err) {
            res.status(500).send(err);
        }
        //res.status(200).json({ message: "Post {post} deleted" });
        res.status(200).json({ message: "Domain deleted" });
    })
};