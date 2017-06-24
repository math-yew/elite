let config = require('./config.js');
module.exports = {
  products: [{
      	api_key:config.key,
      	name:'',
      	description:'',
        image:'',
        rating:'',
        shipping:'',
        price:'',
        category:''
  },
  {
        api_key:config.key,
        name:'Razor Gogo Pogoo',
        description:'This is the classic pogo stick modernized by Razor.  Wear a helmut when using this product',
        image:'https://i5.walmartimages.com/asr/2b3c3baa-da59-4e6d-baa4-b3ebb52c91a9_1.31feca83963b536e29674b7c480c1d06.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
        rating:4,
        shipping:true,
        price:40,
        category:'Toy'
  },
  {
      	api_key:config.key,
      	name:'Apple Watch',
      	description:'Nike+ 42mm Space Gray Aluminum Case Anthracite/Black Nike Sport Band - Space Gray Aluminum',
        image:'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5706/5706614_rd.jpg;maxHeight=550;maxWidth=642',
        rating:4,
        shipping:false,
        price:330,
        category:'Electronics'
  }]
}
