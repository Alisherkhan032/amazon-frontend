import React from 'react'
import Carousel from '../Carousel/Carousel'
import ProductList from '../ProductList/ProductList'
import Navlayout from '../Navlayout/Navlayout'

const MainComponent = () => {
  return (
    <div className='bg-gray-300'>
      <Carousel />
      <ProductList />
    </div>

  )
}

export default function(){
  return <Navlayout>
    <MainComponent />
  </Navlayout>
}