import React from 'react'
import '../components/Footer.css'

function Footer() {
    return (
        <div className='Footer'>
            <div className='footersection'>
                <div className='footerleft'>
                    <h5 className='collegename'>
                        <span className='special'>RIT | </span> Rochester Institute of Technology
                    </h5>
                    <h5 className='collegeaddress'>
                        1 Lomb Memorial Drive
                        Rochester, NY 14623
                        585-475-2411
                    </h5>
                </div>
                <div className='Contributors'>
                    <h5 className='name1'>
                        Shreenidhi
                    </h5>
                    <h5 className='name1'>
                        Sahana
                    </h5>
                    <h5 className='name1'>
                        Pooja
                    </h5>
                </div>
            </div>
        </div >
    )
}

export default Footer