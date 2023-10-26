import React from "react";
import { useState } from 'react';
import './TrackList.css'

const authors = [
    {
        id: 0,
        name: 'Nero',
    }, {
        id: 1,
        name: 'Morena',
    }, {
        id: 2,
        name: 'Nirvana',
    }
]

const years = [
    {
        id: 0,
        name: 1998,
    }, {
        id: 1,
        name: 2000,
    }, {
        id: 2,
        name: 2005,
    }
]

const genres = [
    {
        id: 0,
        name: 'инди',
    }, {
        id: 1,
        name: 'рок',
    }, {
        id: 2,
        name: 'классика',
    }
]

function FilterBlocks() {
    const [showFilter, setshowFilter] = useState(false);
    function showClick() {
        setshowFilter(!showFilter)
    }

    return (
        <>
            <div className="filter__button button-author _btn-text" onClick={showClick}>
                исполнителю
            </div>
            {showFilter && <ListItems items={authors} />}

            <div className="filter__button button-year _btn-text" onClick={showClick}>
                году выпуска
            </div>
          
            {showFilter && <ListItems items={years} />}

            <div className="filter__button button-genre _btn-text">жанру</div>
            {showFilter && <ListItems items={genres} />}
            
        </>
    )
}

export default FilterBlocks;


function ListItems({ items }) {
    const List = items.map(i => <li className="line _btn-text" key={i.id}>{i.name}</li>)
    return (
        <div>
            <ul className="popup" >
                {List}
            </ul>
        </div>

    )

}