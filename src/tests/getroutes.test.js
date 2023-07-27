import {app} from "../main.js";
import supertest from "supertest";

describe("GET /products", () => {
  it("should respond with an array of products", async () => {
    const response = await supertest(app).get("/products");
    expect(response.body.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});

describe("GET /products/:id", () => {
  it("should respond with a product", async () => {
    const response = await supertest(app).get("/products/1");
    expect(response.body.ok).toBe(true);
    expect(response.status).toBe(200);
    expect(response.body.product).toHaveProperty("id");
    expect(response.body.product).toHaveProperty("name");
    expect(response.body.product).toHaveProperty("description");
    expect(response.body.product).toHaveProperty("price");
    expect(response.body.product).toHaveProperty("stock");
    expect(response.body.product).toHaveProperty("image");
    expect(response.body.product).toHaveProperty("category");
    expect(response.body.product).toHaveProperty("userid");
  });
});

describe("GET /productsByUser", () => {
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
      .get("/productsByUser")
      .set("Authorization", "Bearer " + token);
    expect(response.body.ok).toBe(true);
    expect(response.status).toBe(200);
  });
});

describe("GET /ratings", () => {
    it("should respond with an array of ratings", async () => {
        const response = await supertest(app).get("/products/1/ratings");
        expect(response.body.ok).toBe(true);
        expect(response.status).toBe(200);
    });
    }
);

