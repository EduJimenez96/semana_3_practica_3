const UserView = require("../../app/views/UserView")

describe("Tests for UserView", () => {
  test("Return error object when try to create user with a null payload", () => {
    const payload = null
    const result = UserView.createUser(payload)
    
    expect(result.error).toMatch(/payload no existe/)
  });
})