import express from "express";
import { resolvers } from "./graphql/resolvers.js";
import { readFile } from "node:fs/promises";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const typeDefs = await readFile("./src/graphql/schema.graphql", "utf8");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();

app.use(express.json(), cors());
app.use("/graphql", expressMiddleware(server));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`server is running on url: http://localhost:${PORT}/graphql`);
});
