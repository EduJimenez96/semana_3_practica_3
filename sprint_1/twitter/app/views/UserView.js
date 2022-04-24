const User = require("../models/User")

class UserView {
  constructor(error) {
    this.error = error
  }
  static createUser(payload) {
    if (payload == null) { 
      this.error = "payload no existe"
      return this
    }
    return new User(payload.id, payload.username, payload.name, "Sin bio")
  }
}

module.exports = UserView
