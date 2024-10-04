import React from 'react'
import "../Styles/CatModal.css"
import { FaWikipediaW } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";
import siteLogo from "../logo2.png"

function CatModal({ modalData, modalClose }) {
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={() => { modalClose(false) }}></div>
            <div className="modal-card is-responsive">
                <section className="modal-card-body">
                    <div className='mHeader'>
                        <div className="site-logo">
                            <img src={siteLogo} alt='site Logo' /><span>Cat Lore</span></div>
                        <button className='close-modal' onClick={() => { modalClose(false) }}><RiCloseLargeLine /></button>
                    </div>
                    <div className='body-details'>
                        <p><span>Name: </span>{modalData.name}</p>
                        <p><span>Origin: </span> {modalData.origin}</p>
                        <p><span>About: </span>{modalData.description}</p>
                        <p><span>Life Span: </span> {modalData.life_span} Years</p>
                        <p><span>Temperament: </span> {modalData.temperament}</p>
                        <button className='button m1' onClick={() => window.open(modalData.wikipedia_url, '_blank')}><FaWikipediaW /></button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CatModal