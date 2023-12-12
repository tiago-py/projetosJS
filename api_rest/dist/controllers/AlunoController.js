"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async store(req, res) {
    try {
      const novoUsuario = await _Aluno2.default.create(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'email', 'idade'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['filename', 'url'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email', 'idade'],
        order: [['id', 'DESC'], [_Foto2.default, 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          attributes: ['filename', 'url'],
        },
      });
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno inexistente na base de dados'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno inexistente'],
        });
      }
      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id não enviado'],
        });
      }

      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno inexistente'],
        });
      }
      await aluno.destroy();
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
