
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cat_fact_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('cat_fact_table').insert([
        {id: 1, cat_fact: 'A cat can travel at a top speed of approximately 49km over a short distance.'},
        {id: 2, cat_fact: 'A cat can jump up to five times its own height in a single bound.'},
        {id: 3, cat_fact: 'A cat usually has about 12 whiskers on each side of its face.'}
      ]);
    });
};
