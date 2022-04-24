const User = require("../models/User")

class UserView {
  static createUser(payload) {
    var error = this.#checkPayload(payload)
    if (error != null)
      return error
    else
      return new User(payload.id, payload.username, payload.name, "Sin bio")
  }

  static #checkPayload(payload) {
    var error = { error: null }
    if (payload == null) {
      error.error = "payload no existe"
      return error
    } else if (payload.id == null || payload.username == null || payload.name == null) {
      error.error = "necesitan tener un valor válido"
      return error
    } else {
      return null
    }
  }
}

module.exports = UserView
