const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Blog API",
    description: "Implement CRUD operation for blog post and user management.",
  },
  host: "localhost:3000",
};

const outputFile = "./swagger-output.json";
const routes = ["./routes/auth.js", "./routes/feed.js"];

swaggerAutogen(outputFile, routes, doc);
