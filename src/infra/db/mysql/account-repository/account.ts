import mysqlHelper from '../helpers/mysql-helper'
import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'

export class AccountMySqlRepository implements AddAccountRepository {
    async add(accountData: AddAccountModel): Promise<AccountModel> {
        const sql = `insert into account (name, email, password) values ("${accountData.name}", "${accountData.email}", "${accountData.password}");`
        await mysqlHelper.query(sql)
        return accountData
    }
}