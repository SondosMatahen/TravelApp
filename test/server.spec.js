const request = require("supertest");
const server = require("../src/server/server");

describe("Test root path", () => {
  it("response should get method '/'", async () => {
    const response = await request(server).get("/");
    console.log('res',response)
    expect(respons.status).toBe();
    done()
  });
});