class HomeController {
  async index(req, res) {
    res.json('Index Home');
  }
}

export default new HomeController();
