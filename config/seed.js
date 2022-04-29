require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Appetizers', sortOrder: 10},
    {name: 'Rolls', sortOrder: 20},
    {name: 'Specialty Rolls', sortOrder: 30},
    {name: 'Noodle Dishes', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', pic: '🍔', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', pic: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', pic: '🌭', category: categories[0], price: 3.95},
    {name: 'Crab Plate', pic: '🦀', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', pic: '🍤', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', pic: '🦞', category: categories[1], price: 25.95},
    {name: 'Taco', pic: '🌮', category: categories[2], price: 1.95},
    {name: 'Burrito', pic: '🌯', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', pic: '🍕', category: categories[3], price: 3.95},
    {name: 'Spaghetti', pic: '🍝', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', pic: '🍞', category: categories[3], price: 1.95},
    {name: 'French Fries', pic: '🍟', category: categories[4], price: 2.95},
    {name: 'Green Salad', pic: '🥗', category: categories[4], price: 3.95},
    {name: 'Ice Cream', pic: '🍨', category: categories[5], price: 1.95},
    {name: 'Cup Cake', pic: '🧁', category: categories[5], price: 0.95},
    {name: 'Custard', pic: '🍮', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', pic: '🍰', category: categories[5], price: 3.95},
    {name: 'Milk', pic: '🥛', category: categories[6], price: 0.95},
    {name: 'Coffee', pic: '☕', category: categories[6], price: 0.95},
    {name: 'Mai Tai', pic: '🍹', category: categories[6], price: 8.95},
    {name: 'Beer', pic: '🍺', category: categories[6], price: 3.95},
    {name: 'Wine', pic: '🍷', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();