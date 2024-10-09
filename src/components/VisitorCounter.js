import React from 'react';
import './VisitorCounter.css';

const VisitorCounter = ({ count }) => {
    // Helper function to split the number into an array of digits
    const renderDigits = (count) => {
        return String(count).split('').map((digit, index) => (
            <div key={index} className="flip-digit">
                <span>{digit}</span>
            </div>
        ));
    };

    return (
        <div className="flip-counter">
            {renderDigits(count)}
        </div>
    );
};

export default VisitorCounter;
