import React from 'react'
import HeroImage from '../assets/Saravanan.jpg'
import { TypeAnimation } from 'react-type-animation'
import Socialicons from './Socialicons'
import Button from './button'
const Home = () => {
    return (
        <section className='flex flex-col items-center justify-center min-h-screen px-6 md:flex-row'>
            <div className='flex justify-center md:w-1/2'>
                <img src={HeroImage} alt='Saravanan' className='w-48 rounded-full sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300' />
            </div>
            <div className='mt-6 text-center md:w-1/2 md:text-left md:mt-0 '>
                <h1 className='mb-4 text-4xl font-bold sm:text-7xl'>Hi, It's <span className='text-red-500'>Saravanan</span></h1>
                <h3 className='mb-4 text-2xl font-semibold sm:text-3xl'>I am a <span className='text-red-500'>
                    
                    <TypeAnimation
                    sequence={[
                        "Software Developer", 1000,
                        "Data Analyst", 1000,
                        "React Developer", 1000,
                        "Full Stack Developer", 1000,
                    ]}
                    speed={50}
                    style={{fontSize:"1re"}}
                    repeat={Infinity}
                    />
                    
                    
                    </span>
                </h3>
                <p className='mb-6 text-sm sm:text-lg'>Looking to obtain the position of software developer in a fast-paced tech environment to
                    utilize well honed skills in computer science and programming.</p>

                    <Socialicons></Socialicons>
                    <Button text="Hire Me" href="#"></Button>
            </div>
        </section>
    )
}

export default Home