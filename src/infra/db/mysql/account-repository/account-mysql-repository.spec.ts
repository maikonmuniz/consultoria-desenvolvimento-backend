import mysqlHelper from '../helpers/mysql-helper'
import crypto from 'crypto'
import { AccountMySqlRepository } from './account'

const makeSut = (): AccountMySqlRepository => {
    return new AccountMySqlRepository
}

describe('Bcrypt Adapter', () => {
    test('Should call bcrypt with correct values', async () => {

        await mysqlHelper.connect()

        const account = {
            id: crypto.randomUUID(),
            name: 'caneta',
            email: '',
            password: 23
        }

        const consult = await mysqlHelper.insert(account)
    
        mysqlHelper.disconnect()
        expect(consult).toBeTruthy()

    })
})