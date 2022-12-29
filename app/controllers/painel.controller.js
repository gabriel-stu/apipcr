const db = require("../models/index");
const Painel = db.painel;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Tutorial
  const painel = {
    area: req.body.area,
    ordem_ser: req.body.ordem_ser,
    data_init: req.body.data_init,
    data_ter: req.body.data_ter,
    local: req.body.local,
    local_arm: req.body.local_arm,
    id_art:req.body.id_art
  };
  
  // Save Tutorial in the database
  Painel.create(painel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Busca de todos os itens do banco ou busca por nome
exports.findAll = (req, res) => {
  //get local
  const local = req.query.local;
  var conditionLocal = local ? { local: { [Op.iLike]: `%${local}%` } } : null;

  Painel.findAll({ 
      where: {
        conditionLocal
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu."
      });
    });
};

// Busca por ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Painel.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        console.log(id)
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Painel by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Painel.update(req.body, {
    where: { id_pan: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Painel was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Painel with id=${id}. Maybe Painel was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Painel with id=" + id
      });
    });
  
};

// Delete a Painel with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Painel.destroy({
    where: { id_pan: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Painel was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Material with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Material with id=" + id
      });
    });
  
};

