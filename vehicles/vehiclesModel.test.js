const db = require('../data/dbConfig.js');
const Vehicles = require('./vehiclesModel.js');

describe('vehicles model', () => {
  afterEach(async () => {
    await db('vehicles').truncate();
  });

  describe('add()', () => {
    it('should insert provided vehicle', async() => {
      await Vehicles.add({ type: 'car' });
      expect(await db('vehicles')).toHaveLength(1);

      await Vehicles.add({ type: 'truck' });
      expect(await db('vehicles')).toHaveLength(2);
    });
  });
});
