const db = require('../dbConfig');

module.exports = {
    get,
    insert
};

function get() {
    return db
        .select("*")
        .from("cars")
}

function insert(car) {
    return db('cars')
        .insert(car)
        .then(([id]) => this.get(id));
}