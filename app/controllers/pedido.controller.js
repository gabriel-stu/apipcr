const db = require("../models/index");
const Pedido = db.pedido;
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
  const pedido = {
    motivo: req.body.motivo,
    data:req.body.data,
    id_art:req.body.id_art,
    id_mat:req.body.id_mat
  };
  
  // Save Tutorial in the database
  Pedido.create(pedido)
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
  //get motivo
  const motivo = req.query.motivo;
  var conditionMotivo = motivo ? { motivo: { [Op.iLike]: `%${motivo}%` } } : null;

  Pedido.findAll({ 
      where: {
        [Op.and]:[
          conditionMotivo
        ]
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
  Pedido.findByPk(id)
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

// Update a Pedido by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Pedido.update(req.body, {
    where: { id_ped: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pedido was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Pedido with id=${id}. Maybe Pedido was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Pedido with id=" + id
      });
    });
  
};

// Delete a Pedido with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Pedido.destroy({
    where: { id_ped: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Pedido was deleted successfully!"
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

