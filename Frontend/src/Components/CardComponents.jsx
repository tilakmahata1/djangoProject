import React from 'react'



function CardComponents({ id, name, category, price, image, quantity }) {

  return (
    <>
        <div class="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8" key={id}>
                <div class="bg-white p-3 rounded-lg shadow-lg">
                    <img src={image} alt={name} class="w-full object-cover mb-4 rounded-lg"/>
                    <a href="#" class="text-lg font-semibold mb-2">{name}</a>
                    <p class="my-2">{category}</p>
                    <div class="flex items-center mb-4">
                       <span class="text-lg font-bold text-primary">${price}</span>
                       <span class="text-sm line-through ml-2">${price}</span>
                    </div>
                     <p class="my-2">{quantity}</p>
                    <button class="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">Add to Cart</button>
                </div>
                 
        </div>
    </>
  )
}

export default CardComponents