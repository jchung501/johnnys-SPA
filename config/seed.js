require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Appetizers', sortOrder: 10},
    {name: 'Rolls', sortOrder: 20},
    {name: 'Signature Rolls', sortOrder: 30},
    {name: 'Noodle Dishes', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Spicy Crab Salad', pic: 'https://www.wellseasonedstudio.com/wp-content/uploads/2020/07/Chopsticks-picking-up-spicy-kani-salad-from-a-plate.jpg', category: categories[0], price: 10.95},
    {name: 'Miso Soup', pic: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg', category: categories[0], price: 2.95},
    {name: 'Edamame', pic: 'https://peasandcrayons.com/wp-content/uploads/2018/02/quick-easy-spicy-sambal-edamame-recipe-2.jpg', category: categories[0], price: 4.95},
    {name: 'Gyoza', pic: 'https://www.tastythais.com/wp-content/uploads/2020/05/Homemade-Gyoza-Pan-Fried-Steamed-1200.jpg', category: categories[0], price: 6.95},
    {name: 'California Roll', pic: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.jpg', category: categories[1], price: 8.95},
    {name: 'Spicy Tuna Roll', pic: 'https://tiger-corporation-us.com/wp-content/uploads/2019/08/spicy-tuna-roll-900x600.jpg', category: categories[1], price: 10.95},
    {name: 'Rainbow Roll', pic: 'https://www.mashed.com/img/gallery/rainbow-roll-what-you-should-know-before-ordering/l-intro-1618943604.jpg', category: categories[1], price: 9.95},
    {name: 'Shrimp Tempura Roll', pic: 'https://www.mashed.com/img/gallery/shrimp-tempura-roll-what-you-should-know-before-ordering/l-intro-1628971551.jpg', category: categories[1], price: 8.95},
    {name: 'Johnny\'s Special', pic: 'https://sushi-ato.com/wp-content/uploads/2021/01/Ceviche-Roll.jpg', category: categories[2], price: 15.95},
    {name: 'Spicy Dragon Roll', pic: 'https://mysushikitchen.com/wp-content/uploads/2021/02/Shaggy-Dog-Roll-1-1024x576.jpg', category: categories[2], price: 17.95},
    {name: 'Super Spider Roll', pic: '', category: categories[2], price: 20.95},
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