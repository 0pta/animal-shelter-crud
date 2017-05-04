exports.seed = function(knex) {
  return knex('animals').del()
    .then(() => {
      return knex('animals').insert([{
        img_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/4/45/Crystal_-_American_Longhair_Cat.png/800px-Crystal_-_American_Longhair_Cat.png',
        name: 'Lily',
        kind: 'Cat',
        age: 6,
        description: 'Very friendly and likes to cuddle. Long, mostly white soft hairs. Big sparkly eyes.',
        is_adopted: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        img_url: 'https://scontent.xx.fbcdn.net/v/t35.0-12/18318307_10211389985497585_1897923952_o.jpg?oh=d45ab16a3a620285153a89353ce86a9a&oe=590B7776',
        name: 'Carmin',
        kind: 'Dog',
        age: 13,
        description: 'Havanese poodle schnauzer mix. Ears stick straight out and make her look like a teddy bear. Makes cute grunt noises when you pet her.',
        is_adopted: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        img_url: 'http://www.whatifknits.com/images/sparky_sleepybaby.jpg',
        name: 'Sparky',
        kind: 'Cat',
        age: 2,
        description: 'Calico tabby mix. Small size. Kinked up tail. Likes to talk and get pets.',
        is_adopted: false,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('animals_id_seq', (SELECT MAX(id) FROM animals));"
      );
    });
};
