var pool = require('./bd');

async function getPredicciones() {
    var query ="select * from predicciones order by id asc";
    var rows = await pool.query(query);
    return rows;
}

async function getPrediccionById(id) {
    var query ="select * from predicciones where id = ?";
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarPrediccionById(obj, id) {
    try{
        var query = "update predicciones set ? where id =?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error){
        throw error;
    }
}


async function insertPredicciones(obj){
    try{
        var query ="insert into predicciones set ?" ;
        var rows = await pool.query (query, [obj]);
        return rows ;
    } catch (error) {
        console.log(error);
        throw error ;
    }
}

async function deletePrediccionesById(id) {
    var query = " delete from predicciones where id=?";
    var rows = await pool.query(query, [id]);
    return rows
}

module.exports = {getPredicciones , modificarPrediccionById, getPrediccionById, deletePrediccionesById , insertPredicciones}