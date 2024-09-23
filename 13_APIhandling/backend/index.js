import express from 'express';

const app = express();

app.get("/api/products", (req, res) => {
    const products = [
        {
            id:1,
            name: "Beauty",
            price:200,
            image: "https://images.shiksha.com/mediadata/images/articles/1651239730phpQs8lrL.jpeg"
          },
          {
            id:2,
            name: "Fragrances",
            price:300,
            image: "https://imagevars.gulfnews.com/2022/02/03/Perfume-fragrance-spray-_17ebe98ea9c_medium.jpg"
          },
          {
            id:3,
            name: "Furniture",
            price:5000,
            image: "https://5.imimg.com/data5/SELLER/Default/2023/3/CV/NR/VH/182365761/imported-modern-furniture-500x500.jpg"
          },
          {
            id:4,
            name: "Groceries",
            price:500,
            image: "https://www.instacart.com/company/wp-content/uploads/2023/08/grocery-delivery-to-hotel-hero.webp"
          },
          {
            id:5,
            name: "Home Decoration",
            price:300,
            image: "https://www.jiomart.com/images/product/original/rv2osp4azb/true-d-cor-wooden-wall-hanging-room-decoration-items-for-home-office-bedroom-gift-3d-effect-designer-wall-decor-for-living-room-set-of-3-wall-hangings-paintings-for-home-decoration-product-images-orv2osp4azb-p600372907-0-202304111120.png?im=Resize=(1000,1000)"
          }
    ]

    // http://localhost:3000/api/products?search=metal
    if(req.query.search){
        const filterProducts = products.filter(product => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }
    
    setTimeout(() => {
        res.send(products)
    }, 3000);
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})