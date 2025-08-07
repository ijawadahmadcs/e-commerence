import React from 'react'
import Slider from './Slider'
import Container from '../Container/Container'
import Link from 'next/link'
const HeroSection = () => {
  return (
    <>
   <Container>
    <section className="flex items-center justify-between px-8 py-16 rounded-[12px]">
      <div className={`flex-1 max-w-1/2 text-gray-700`}>
        <h1 className='text-4xl font-bold mb-4'>
          Bas click karo, ghar lao!<span className='text-pink-500'>Click <span className='text-3xl'>&</span> Pick</span>
        </h1>
        <p className='text-1xl font-medium'>Discover the latest headphones, earphones, mobiles, tablets etc.</p>
        <p className='text-1xl font-medium'>Exclusive deals just for you!</p>
        <Link href="/product">
        <button className='bg-gray-400 text-white px-4 py-2 rounder-md hover:bg-pink-700 transition duration-300'>Shop Now</button></Link>
      </div>
       <Slider/>
    </section>
   </Container>
    </>
  )
}

export default HeroSection