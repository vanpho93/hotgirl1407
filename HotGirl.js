const queryDB = require('./db');

class HotGirl {
    static async getGirlById(id) {
        const selectSql = 'SELECT * FROM "HotGirl" WHERE id >= $1 ORDER BY id ASC LIMIT 1';
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
    static incrLikeById(id) {
        const updateSql = 'UPDATE public."HotGirl" SET "like"= "like" + 1 WHERE id = $1  RETURNING "like"';
        return queryDB(updateSql, [id])
        .then(result => {
            if(!result.rows[0]) throw new Error('Hotgirl khong ton tai') ;
            return result.rows[0].like;
        });
    }
}

module.exports = HotGirl;

// HotGirl.incrLikeById(1)
// .then((like) => console.log(like))
// .catch(() => console.log('That bai'));
