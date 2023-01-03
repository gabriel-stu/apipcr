const db = require("../models/index");
const Material = db.material;
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
  const material = {
    nome: req.body.nome,
    tipo: req.body.tipo,
    cor: req.body.cor,
    und: req.body.und,
    quant: req.body.quant,
  };
  
  // Save Tutorial in the database
  Material.create(material)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the material."
      });
    });
};

// Busca de todos os itens do banco ou busca por nome
exports.findAll = (req, res) => {
  //get nome
  const nome = req.query.nome;
  var conditionName = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  //get tipo
  const tipo = req.query.tipo;
  var conditionTipo = tipo ? { tipo: { [Op.iLike]: `%${tipo}%` } } : null;
  //get cor
  const cor = req.query.cor;
  var conditionCor = cor ? { cor: { [Op.iLike]: `%${cor}%` } } : null;
  //get unidade
  const und = req.query.und;
  var conditionUnd = und ? { und: { [Op.iLike]: `%${und}%` } } : null;

  Material.findAll({ 
      where: {
        [Op.and]:[
          conditionName,
          conditionTipo,
          conditionCor,
          conditionUnd,
        ]
      }
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Busca por ID
exports.findOne = (req, res) => {
  const id = req.params.id;
  Material.findByPk(id)
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

// Update a Material by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Material.update(req.body, {
    where: { id_mat: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Material was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Material with id=${id}. Maybe Material was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Material with id=" + id
      });
    });
  
};

// Delete a Material with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Material.destroy({
    where: { id_mat: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Material was deleted successfully!"
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

