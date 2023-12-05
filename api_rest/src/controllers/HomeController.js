import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'maria',
      sobrenome: 'clara',
      email: 'mariaclara@email.com',
      idade: 18,
      peso: 67,
      altura: 1.6,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
