import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const aluno = await Aluno.findAll();
    res.json(aluno);
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json(e.errors.map((err) => err.message));
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não encontrado'] });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }
      const updatedAluno = await aluno.update(req.body);
      return res.json(updatedAluno);
    } catch (e) {
      return res.status(400).json(e.errors.map((err) => err.message));
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não encontrado'] });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json(e.errors.map((err) => err.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['ID não encontrado'] });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não encontrado'] });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json(e.errors.map((err) => err.message));
    }
  }
}

export default new AlunoController();
