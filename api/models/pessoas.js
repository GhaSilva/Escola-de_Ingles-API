'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {

    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado'},
        as: 'aulasMatriculadas'
        
      })
    }
  };
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 4) throw new Error('Por favor, insira um nome válido')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dados do tipo e-mail inválidos'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { where: {} }
    },
    modelName: 'Pessoas',
  });
  return Pessoas;
};