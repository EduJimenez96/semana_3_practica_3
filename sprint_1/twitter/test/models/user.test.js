const User = require('../../app/models/User')

describe("Unit tests for User class", () => {
  test("Create an User object", () => {
    const user = new User(1, "Lalo_JimCi96", "Eduardo", "Bio")

    expect(user.id).toBe(1)
    expect(user.username).toBe("Lalo_JimCi96")
    expect(user.name).toBe("Eduardo")
    expect(user.bio).toBe("Bio")
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdated).not.toBeUndefined()
  });

  test("Add getters", () => {
    const user = new User(1, "Lalo_JimCi96", "Eduardo", "Bio")

    expect(user.getUsername).toBe("Lalo_JimCi96")    
    expect(user.getBio).toBe("Bio")
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdated).not.toBeUndefined()
  });
})
