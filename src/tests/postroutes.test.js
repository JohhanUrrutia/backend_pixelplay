import {app} from "../main.js";
import supertest from "supertest";

describe("POST /login", () => {
  it("should respond with status 200 and ok true", async () => {
    const response = await supertest(app).post("/login").send({
      email: "admin@admin.com",
      password: "123123123",
    });
    expect(response.body.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});

describe("POST /products", () => {
  let token;
  beforeAll(async () => {
    const response = await supertest(app).post("/login").send({
      email: "admin@admin.com",
      password: "123123123",
    });
    token = response.body.token;
  });
  it("should respond with status 200 and ok true", async () => {
    const response = await supertest(app)
      .post("/products")
      .set("Authorization", "Bearer " + token)
      .send({
        name: "test",
        description: "test",
        price: 1,
        stock: 1,
        image: "test",
        category: "test",
        userId: 1,
      });
    expect(response.body.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});
// command to run just this file test: npm test -- --testPathPattern=postroutes.test.js
