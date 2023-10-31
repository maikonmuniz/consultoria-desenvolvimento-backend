import mysqlHelper from '../helpers/mysql-helper'


describe('Bcrypt Adapter', () => {
    test('Should call bcrypt with correct values', async () => {
        await mysqlHelper.connect()
        const consult = await mysqlHelper.consult()
        mysqlHelper.disconnect()
        expect(consult).toBeTruthy()
    })
})