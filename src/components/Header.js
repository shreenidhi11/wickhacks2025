import React from 'react'
import '../components/Header.css'


function Header() {
    return (
        <div className='header'>
            <div className='PrimaryHeading'>
                <h2 className='Logo'>RIT</h2>
                <h2 className='title'>Rochester Institute of Technology</h2>
                <div className='subheading'>
                    <h5>News</h5>
                    <h5>Directory</h5>
                    <h5>myRIT</h5>
                </div>
            </div>
            {/* <h2 className='title'>Rochester Institute of Technology</h2> */}
            {/* <h3 className='subtitle'>Department of Lost and Found</h3> */}
        </div>
    )
}

export default Header