import user from '../models/user.js'

const login = async function (ctx, next) {
  const result = await user.getUserById(ctx.params.id)
  ctx.response.body = result
}

export default {
  login
}
