import Aluno from '../models/Aluno';

class HomeController {
  async store(req, res) {
    try {
      const novoUsuario = await Aluno.create(req.body);
      return res.json(novoUsuario);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }
}

export default new HomeController();
