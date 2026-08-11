class clientModel {
    constructor(database) {
        this.database = database;
    };

    insertDatabase = async (name_client, email, nif) => {
        const sql = `
        INSERT INTO clients (name_client, email, nif )
        VALUES (?, ?, ?)
        `
        return await this.database.exec(sql, [name_client, email, nif])
    };

    updateDatabase = async (name_client, email, nif, id) => {
        const sql = `
            UPDATE clients SET
            name_client = ?,
            email = ?,
            nif = ?
            WHERE id = ?
            
        `
        return await this.database.exec(sql, [name_client, email, nif, id]);
    };

    selectAllDatabase = async () => {
        const sql = `SELECT *FROM clients`

        return this.database.exec(sql)
    };

    selectSingleDatabase = async (id) => {
        const sql = `SELECT *FROM clients WHERE id = ?`
        return await this.database.exec(sql, [id])
    }

    deleteClientDatabase = async (id) => {
        const sql = `DELETE FROM clients WHERE id = ?`

        return await this.database.exec(sql, [id])
    }
};

module.exports = clientModel;