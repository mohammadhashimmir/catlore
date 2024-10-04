import React, { useState, useRef } from 'react';
import "../Styles/Card.css";
import { FaLocationDot } from "react-icons/fa6";


function Card({ content, modalDataRetrieve }) {
    const [spans, setSpans] = useState(1);
    const imageRef = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);

    // Calculate spans when the image loads
    const handleImageLoad = () => {
        if (imageRef.current) {
            const height = imageRef.current.clientHeight;
            const span = Math.ceil(height / 10);
            setSpans(span);
        }
    };

    //   send data for modal
    function onReadMoreClick(data) {
        modalDataRetrieve(data, true);
    }

    //   toggle card flip on click 
    function handleCardClick() {
        setIsFlipped(prevState => !prevState);
    }

    return (
        <div className="flip-card" style={{ gridRowEnd: `span ${spans}` }} onClick={handleCardClick}>
            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                    <img
                        ref={imageRef}
                        src={content.url}
                        alt="kitty"
                        onLoad={handleImageLoad} />
                    <h3>{content.breedName}</h3>
                </div>

                <div className="flip-card-back">
                    {content.breeds.map((data, index) => (
                        <div className='cat-detail' key={index}>
                            <p>{data.name}</p>
                            <div className='origin-details'>
                                <p><span><FaLocationDot /></span> {data.origin}</p>
                            </div>
                            <button className='button' onClick={() => onReadMoreClick(data)}>Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
