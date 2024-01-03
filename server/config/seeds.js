const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Available' },
    { name: 'Archives' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Amboyna',
      description:
        'I forged this from high carbon steel.  I used black g10 Liners in the handle and Amboyna wood for the handle!  This wood is really beautiful!  This knife is about 10.25 inches long. ',
      image: 'Amboyna.jpg',
      category: categories[0]._id,
      price: 169.00,
      quantity: 1
    },
    {
      name: 'Burl Wood Handle',
      description:
        'This Blade is made from highly carbon steel.  My sons and I made this handle material from some burl wood and epoxy resin.',
      image: 'burl.jpg',
      category: categories[0]._id,
      price: 149.00,
      quantity: 1
    },
    {
      name: 'G10 Handle',
      description:
        'I have a nice smaller high carbon steel knife available!  Total length is about 7.5 inches.  The handle is made from g10.',
      image: 'g10.jpg',
      category: categories[0]._id,
      price: 100.00,
      quantity: 1
    }, {
      name: 'Twist Damascus Knife',
      description:
        'Twist Damascus knife with green and black g10 knife scales and white liners!!!! Made some grooves in the handle and I’m liking the finished look!  Total length is about 9.5 inches. ',
      image: 'twist.jpg',
      category: categories[0]._id,
      price: 219.00,
      quantity: 1
    }, {
      name: 'Cu-Mai',
      description:
        'This is a Cu-Mai(two layers of copper and three layers of high carbon steel) knife that Iv completed.  I used red white and blue g10 for the handle.  I have to say that I LOVE the look of this cu-Mai!!  ',
      image: 'Cu-Mai.jpg',
      category: categories[0]._id,
      price: 200.00,
      quantity: 1
    }, {
      name: 'Cocobolo Handle',
      description:
        'This is forged from leaf spring steel.  Used cocobolo on the handle and white micarts liners. Total length is 13 inches',
      image: 'cocobolo.jpg',
      category: categories[0]._id,
      price: 169.00,
      quantity: 1
    }
  ]);

  console.log('products seeded');

  await User.create({
    name: 'Pamela Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    name: 'Elijah Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });


  console.log('users seeded');

  process.exit();
});