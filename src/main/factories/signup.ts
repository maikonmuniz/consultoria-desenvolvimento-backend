import { SignUpController } from "../../presentation/controllers/signuo";
import { EmailValidatorAdapter } from "../../utils/email-validator-adapter";
import { DbAddAccount } from "../../data/usecases/add-account/db-add-account";
import { BcryptAdapter } from "../../infra/criptography/bcrypt-adapter";
import { AccountMySqlRepository } from "../../infra/db/mysql/account-repository/account";
import { Controller } from "../../presentation/protocols";
import { LogControllerDecorator } from "../decorators/log";

export const makeSignUpController = (): Controller =>  {
    const salt = 12
    const emailValidatorAdapter = new EmailValidatorAdapter()
    const bcryptAdapter = new BcryptAdapter(salt)
    const accountMongoRepository = new AccountMySqlRepository()
    const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
    const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount)
    return new LogControllerDecorator(signUpController)

}
