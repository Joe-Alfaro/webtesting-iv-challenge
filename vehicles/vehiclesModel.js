const db = require('../data/dbConfig.js');

const add = async vehicle => {
  const [id] =  await db('vehicles').insert(vehicle, 'id');
};

module.exports = {
  add
}
