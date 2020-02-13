
exports.up = function(knex) {
  return knex.schema.createTable('cat_fact_table', table => {
      table.increments('id').primary()
      table.string('cat_fact')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('cat_fact_table')
};
