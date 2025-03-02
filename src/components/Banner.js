import React from 'react'
import '../components/Banner.css'

function Banner() {
    return (
        <div className='maintitle'>
            <div className='backgroundfortitle'></div>
            <h1 className='textonbanner'>
                Lost Something on campus? <br/>
                Lets Find it together
            </h1>
            <h2 className='subtextonbanner'>
                If you’ve lost something valuable, we’re here to help you find it effortlessly and stress-free
            </h2>
            <img className='banner-image' src="/Lost-and-Found2.jpg" alt="Banner Image" />
        </div>
    )
}

export default Banner