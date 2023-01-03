const db = require("../models/index");
const Artista = db.artista;
const Op = db.Sequelize.Op;

// Create and Save a new Artista
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Artista
  const artista = {
    nome: req.body.nome,
    apelido:req.body.apelido,
  };
  
  // Save Artista in the database
  Artista.create(artista)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Artista."
      });
    });
};

// Busca de todos os itens do banco ou busca por nome
exports.findAll = (req, res) => {
  //get nome
  const nome = req.query.nome;
  var conditionNome = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Artista.findAll({ 
      where: {
        [Op.and]:[
          conditionNome
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
  Artista.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        console.log(id)
        res.status(404).send({
          message: `Cannot find Artista with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Artista with id=" + id
      });
    });
};

// Update a Artista by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Artista.update(req.body, {
    where: { id_art: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Artista was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Artista with id=${id}. Maybe Artista was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Artista with id=" + id
      });
    });
  
};

// Delete a Artista with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Artista.destroy({
    where: { id_art: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Artista was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Material with id=${id}. Maybe Artista was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Material with id=" + id
      });
    });
  
};

