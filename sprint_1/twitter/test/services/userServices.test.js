const User = require("../../app/models/User");
const UserService = require("../../app/services/userService")

describe("Tests for UserService", () => {
  test("1. Create a new user using UserService", () => {
    const user = UserService.create(1, "Lalo_JimCi96", "Eduardo")

    expect(user.username).toBe("Lalo_JimCi96")
    expect(user.name).toBe("Eduardo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });

  test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "Lalo_JimCi96", "Eduardo")

    const userInfoInList = UserService.getInfo(user)

    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("Lalo_JimCi96")
    expect(userInfoInList[2]).toBe("Eduardo")    
    expect(userInfoInList[3]).not.toBeUndefined()
  });

  test("3. Update username", () => {
    const user = UserService.create(1, "Lalo_JimCi96", "Eduardo")

    UserService.updateUsername(user, "Lalo_96")

    expect(user.username).toBe("Lalo_96")
  });
})
