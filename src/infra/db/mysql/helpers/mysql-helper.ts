import mysql from 'mysql2'

const mysqlHelper = {
    client: mysql,
    async connect () {
        this.client = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'data_base_fake'
        }).promise()
    },
    async consult(): Promise<consult> {
        return this.client.query("select * from products;");
    },
    async disconnect() {
        this.client.end()
    }
}

type consult = {
    id: string, name: string, bar_code: string, price: number
}

export default mysqlHelper;