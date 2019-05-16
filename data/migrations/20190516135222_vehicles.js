exports.up = (knex, Promise) => (
  knex.schema
    .createTable('vehicles', table => {
      table.increments();

      table.string('type', 255)
        .notNullable()
        .unique();

      table.timestamps(true, true);
    })
);

exports.down = (knex, Promise) => (
  knex.schema
    .dropTableIfExists('vehicles')
);
