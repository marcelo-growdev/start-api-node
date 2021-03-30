import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(404).json({ msg: error.message ? error.message : error });
    }
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(200).json({
        user: { login: user.login },
      });
    } catch (error) {
      return res.status(404).json({ msg: error.message ? error.message : error });
    }
  }
}

export default new UserController();
