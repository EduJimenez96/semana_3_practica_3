const User = require("../models/User")

class UserService{
  static create(id, username, name){
    return new User(id, username, name, "Sin bio")
  }

  static getInfo(userInfo){
    return [userInfo.id, userInfo.username, userInfo.name, "Sin bio"]
  }

  static updateUsername(userInfo, username){
      userInfo.username = username
  }
}

module.exports = UserService
