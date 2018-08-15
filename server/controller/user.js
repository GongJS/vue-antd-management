const auth = require('./user.js');
const user = require('../models/user.js');
module.exports = {
  login: async(ctx, next) => {
    const result = await user.getUserById(ctx.params.id)
    ctx.response.body = result
  }
}
