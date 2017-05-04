
exports.up = function(knex) {
  return knex.schema.createTable('animals', (table) => {
    table.increments();
    table.text('img_url').notNullable().defaultTo('');
    table.string('name').notNullable().defaultTo('');
    table.string('kind').notNullable();
    table.integer('age').notNullable();
    table.text('description');
    table.boolean('is_adopted');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('animals');
};
