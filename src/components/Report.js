import React from 'react';
import '../components/Report.css';

function Report() {
    return (
        <div className='lostfoundsection'>
            <div className='add'>
                <h3 className="center-text">
                    <a href="/report-lost" target="_self" rel="noopener noreferrer">
                        Report Lost Item
                    </a>
                </h3>
            </div>
            <div className='found'>
                <h3 className="center-text">
                    <a href="/report-found" target="_self" rel="noopener noreferrer">
                        Report Found Item
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default Report;
