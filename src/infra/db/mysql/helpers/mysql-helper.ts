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
    async insert(dados: account): Promise<account> {

        this.client.query(`insert into products
                                 (id, name, email, password)
                            values
                                 ("${dados.id}", "${dados.name}", "${dados.email}", "${dados.password}";`);

        return dados

    },
    async consult(): Promise<account> {
        return this.client.query("select * from products;");
    },
    async disconnect() {
        this.client.end()
    }
}

type account = {
    id: string
    , name: string
    , email: string
    , password: string
}

export default mysqlHelper;