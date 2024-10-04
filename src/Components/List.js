import React from 'react'
import Card from './Card';
import "../Styles/List.css"

function List({ catData, modalDataRetrieve, term }) {

    // search cat list 
    const searchedCats = catData.filter(cat => cat.breeds.some(breed => breed.name.toLowerCase().includes(term.toLowerCase())));

    // render searched list 
    const renderedCats = searchedCats.map(data => {
        return <Card key={data.id} content={data} modalDataRetrieve={modalDataRetrieve}
        />;
    });

    return (
        <div className="cat-list">
            {renderedCats}
        </div>
    )
}

export default List