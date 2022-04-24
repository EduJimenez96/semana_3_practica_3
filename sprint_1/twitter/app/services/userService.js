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

  static getAllUsernames(users){
    var usernames = [];

    console.log(users)

     users.forEach(user => {
      usernames.push(user.username)
     });
    
    return usernames
  }
}

module.exports = UserService
