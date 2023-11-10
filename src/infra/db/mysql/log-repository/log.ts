import { LogErrorRepository } from "../../../../data/protocols/log-error-repository";
import mysqlHelper from "../helpers/mysql-helper"

export class LogMySQLRepository implements LogErrorRepository {
    async logError(stack: string): Promise<void> {
        const dataNow = new Date
        const sql = `insert into logError (error, date) values ("${stack}", "${dataNow}");`
        await mysqlHelper.query(sql)
    }
}