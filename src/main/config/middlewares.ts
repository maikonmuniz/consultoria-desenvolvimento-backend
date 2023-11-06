import { Express } from 'express'
import { cors } from '../middlewares'
import express from 'express'
export default (app: Express): void => {
    app.use(express.json())
    app.use(cors)
}