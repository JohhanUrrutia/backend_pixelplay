import {pool} from "../../../database/config.js";

export const deleteProduct = async (id) => {
    const text = "DELETE FROM products WHERE id = $1";
    const values = [id];
    const {rows} = await pool.query(text, values);
    return rows[0];
};