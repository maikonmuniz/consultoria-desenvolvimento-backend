import { Router } from 'express'
import { adatRoute } from '../adapters/express-adapter-route'
import { makeSignUpController } from '../factories/signup'

export default (router: Router): void => {
    router.post('/signup', adatRoute(makeSignUpController()))
}