import React from 'react'
import img1 from '../../assets/images/main-slider/5.jpg'
import img2 from '../../assets/images/main-slider/4.jpg'
import img3 from '../../assets/images/main-slider/2.png'

import CardComponents from '../../Components/CardComponents'
import {AllProducts} from '../../data/AllProduct'

function Homepage() {
   const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setProducts(AllProducts)
  }, [])
  return (
    <>

      <section id="product-slider">
        <div className="main-slider swiper-container">
            <div className="swiper-wrapper">
                
                <div className="swiper-slide">
                    <img src={img1} alt="Product 1"/>
                    <div className="swiper-slide-content">
                      <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Women</h2>
                      <p className="mb-4 text-white md:text-2xl">Experience the best in sportswear with <br/>our latest collection.</p>
                        <a href="/"
                            className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block">Shop
                            now</a>
                    </div>
                </div>
               
                <div className="swiper-slide">
                    <img src={img2} alt="Product 2"/>
                    <div className="swiper-slide-content">
                      <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Men</h2>
                      <p className="mb-4 text-white md:text-2xl">Discover the latest trends in Men`s <br/>sportswear and casual fashion.</p>
                        <a href="/"
                            className="bg-white hover:bg-transparent text-black hover:text-white font-semibold px-4 py-2 rounded-full inline-block border border-transparent hover:border-white">Shop
                            now</a>
                    </div>
                </div>
               
                <div className="swiper-slide">
                    <img src={img3} alt="Product 3"/>
                    <div className="swiper-slide-content">
                      <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">Accessories</h2>
                      <p className="mb-4 text-white md:text-2xl">Elevate your style with our latest <br/>sportswear collection.</p>
                        <a href="/"
                            className="bg-primary hover:bg-transparent text-white hover:text-white border border-transparent hover:border-white font-semibold px-4 py-2 rounded-full inline-block">Shop
                            now</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
    </section>

    
    <section id="popular-products">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Popular products</h2>
            <div className="flex flex-wrap -mx-4">
               
                
                {
                  products.map((product,index)=>{
                    return (
                      <CardComponents
                        id={index}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        image={product.image}
                        quantity={product.quantity}
                      />

                    )
                  })
                }
             
              </div>
        </div>
    </section>
    </>
  )
}

export default Homepage