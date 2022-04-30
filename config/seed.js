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
    {name: 'Spicy Crab Salad', img: 'https://www.wellseasonedstudio.com/wp-content/uploads/2020/07/Chopsticks-picking-up-spicy-kani-salad-from-a-plate.jpg', category: categories[0], price: 10.95},
    {name: 'Miso Soup', img: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/05/miso-soup.jpg', category: categories[0], price: 2.95},
    {name: 'Edamame', img: 'https://peasandcrayons.com/wp-content/uploads/2018/02/quick-easy-spicy-sambal-edamame-recipe-2.jpg', category: categories[0], price: 4.95},
    {name: 'Gyoza', img: 'https://www.tastythais.com/wp-content/uploads/2020/05/Homemade-Gyoza-Pan-Fried-Steamed-1200.jpg', category: categories[0], price: 6.95},
    {name: 'California Roll', img: 'https://www.pressurecookrecipes.com/wp-content/uploads/2021/02/california-roll.jpg', category: categories[1], price: 8.95},
    {name: 'Spicy Tuna Roll', img: 'https://tiger-corporation-us.com/wp-content/uploads/2019/08/spicy-tuna-roll-900x600.jpg', category: categories[1], price: 10.95},
    {name: 'Rainbow Roll', img: 'https://www.mashed.com/img/gallery/rainbow-roll-what-you-should-know-before-ordering/l-intro-1618943604.jpg', category: categories[1], price: 9.95},
    {name: 'Shrimp Tempura Roll', img: 'https://www.mashed.com/img/gallery/shrimp-tempura-roll-what-you-should-know-before-ordering/l-intro-1628971551.jpg', category: categories[1], price: 8.95},
    {name: 'Johnny\'s Special', img: 'https://sushi-ato.com/wp-content/uploads/2021/01/Ceviche-Roll.jpg', category: categories[2], price: 15.95},
    {name: 'Spicy Dragon Roll', img: 'https://mysushikitchen.com/wp-content/uploads/2021/02/Shaggy-Dog-Roll-1-1024x576.jpg', category: categories[2], price: 17.95},
    {name: 'Super Spider Roll', img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/bb/56/2b/fried-sushi-big-roll.jpg', category: categories[2], price: 20.95},
    {name: 'Tonkatsu Ramen', img: 'https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1', category: categories[3], price: 15.95},
    {name: 'Tsukemen Ramen', img: 'https://thefyslife.com/wp-content/uploads/2021/10/Tsukemen-Ramen.jpg', category: categories[3], price: 16.95},
    {name: 'Beef Pho', img: 'https://assets.bonappetit.com/photos/601185e9e0a941bb1291e9e2/1:1/w_2560%2Cc_limit/GoLive-Beef-Pho.jpg', category: categories[3], price: 13.95},
    {name: 'Ramen Egg', img: 'https://drivemehungry.com/wp-content/uploads/2021/09/ramen-eggs-soy-sauce-marinade-1.jpg', category: categories[4], price: 2.95},
    {name: 'Seaweed Salad', img: 'https://www.asiancaucasian.com/wp-content/uploads/2021/01/Japanese-Seaweed-Salad-w-Sushi-3_600x400.jpg', category: categories[4], price: 4.95},
    {name: 'Matcha Crepe Cake', img: 'https://www.justonecookbook.com/wp-content/uploads/2019/11/Matcha-Mille-Crepe-Cake-4646-III.jpg', category: categories[5], price: 9.95},
    {name: 'Matcha Mochi', img: 'https://www.justonecookbook.com/wp-content/uploads/2019/07/Green-Tea-Mochi-9189-I.jpg', category: categories[5], price: 3.95},
    {name: 'Matcha Ice Cream', img: 'https://www.rotinrice.com/wp-content/uploads/2011/08/MatchaIceCream-1.jpg', category: categories[5], price: 2.95},
    {name: 'Fluffy Cheesecake', img: 'https://images.squarespace-cdn.com/content/v1/5e185ce3e56525704fdae715/1627468824716-ZW8D9JGOUO7RF9RJZV65/Cake1.jpg', category: categories[5], price: 7.95},
    {name: 'Midori Sour', img: 'https://www.shakedrinkrepeat.com/wp-content/uploads/2021/04/Midori-Sour-4.jpg', category: categories[6], price: 9.95},
    {name: 'Sake', pic: 'https://www.kanpai.eu/img/wat-is-sake-kanpai.jpg', category: categories[6], price: 4.95},
    {name: 'Japanese Whiskey', img: 'https://whisky.suntory.com/sites/default/files/2019-02/best-enjoyed-hibiki-jh.png', category: categories[6], price: 10.95},
    {name: 'Kirin', img: 'https://www.newyorkbeverage.com/wp-content/uploads/2021/03/kirinichibancans.jpg', category: categories[6], price: 3.95},
    {name: 'Sapporo', img: 'https://beverages2u.com/wp-content/uploads/2021/06/sapporo-12-oz-can_01.jpg', category: categories[6], price: 3.95}
  ]);

  console.log(items)

  process.exit();

})();