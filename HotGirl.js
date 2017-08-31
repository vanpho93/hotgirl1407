const queryDB = require('./db');

class HotGirl {
    static async getGirlById(id) {
        const selectSql = 'SELECT * FROM "HotGirl" WHERE id = $1';
        const result = await queryDB(selectSql, [id]);
        if (!result.rows[0]) throw new Error('Hotgirl khong ton tai');
        return result.rows[0];
    }
    // static getGirlById(id) {
    //     const selectSql = 'SELECT * FROM "HotGirl" WHERE id = $1';
    //     return queryDB(selectSql, [id])
    //     .then(result => {
    //         if (!result.rows[0]) return Promise.reject(new Error('Hotgirl khong ton tai'));
    //         return result.rows[0];
    //     });
    // }
}

module.exports = HotGirl;

// HotGirl.getGirlById(10)
// .then(girl => console.log(girl))
// .catch(err => console.log(err.message));
