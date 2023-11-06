import express from "express";
import setupMiddlewares from "./middlewares"
import setupRoutes from "./routes"

const app = express()
// app.use(express.json())
setupMiddlewares(app)
setupRoutes(app)

export default app