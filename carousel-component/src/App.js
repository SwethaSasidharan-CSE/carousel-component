import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        { id: 1, content: "1" },
        { id: 2, content: "2" },
        { id: 3, content: "3" },
        { id: 4, content: "4" },
        { id: 5, content: "5" },
        { id: 6, content: "6" },
        { id: 7, content: "7" },
        { id: 8, content: "8" },
        { id: 9, content: "9" }
    ];

    const itemsPerPage = 3;
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevClick = () => {
        const newIndex = (currentIndex === 0) ? totalPages - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = (currentIndex === totalPages - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const displayedItems = items.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

    return (
        <div className="carousel">
            <div className="carousel-content">
                {displayedItems.map((item) => (
                    <div key={item.id} className="carousel-item">
                        <div className="carousel-box">{item.content}</div>
                    </div>
                ))}
            </div>
            <button className="arrow arrow-left" onClick={handlePrevClick}>
                &lt;
            </button>
            <button className="arrow arrow-right" onClick={handleNextClick}>
                &gt;
            </button>
            <div className="dots">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default App;



