const UserService = require("../../app/services/userService")

describe("Tests for UserService", () => {
  test("1. Create a new user using UserService", () => {
    const user = UserService.create(1, "Lalo_JimCi96", "Eduardo")

    expect(user.username).toBe("Lalo_JimCi96")
    expect(user.name).toBe("Eduardo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  });
})
