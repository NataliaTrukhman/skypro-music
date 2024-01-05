import React from "react";
import { useState } from 'react';
import { styled } from 'styled-components'

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
    },
    {
        id: 3,
        name: 'Ray Charles',
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
    },
    {
        id: 3,
        name: 2007,
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
    },
    {
        id: 3,
        name: 'джаз',
    }
]

function FilterBlocks() {
    const [showFilter, setShowFilter] = useState(null);
    function showClick(filter) {
        if (showFilter === filter) {
            setShowFilter(null)
        } else {
            setShowFilter(filter)
        }
    }
    return (
        <>
            <div className={`filter__button button-year _btn-text ${showFilter === "authors" ? 'active' : ''}`} onClick={() => showClick("authors")}>
                исполнителю
            </div>
            {showFilter === "authors" ? <ListItems items={authors} /> : null}
            <div className={`filter__button button-year _btn-text ${showFilter === "years" ? 'active' : ''}`} onClick={() => showClick("years")}>
                году выпуска
            </div>
            {showFilter === "years" ? <ListItems items={years} /> : null}
            <div className={`filter__button button-year _btn-text ${showFilter === "genres" ? 'active' : ''}`} onClick={() => showClick("genres")} >жанру</div>
            {showFilter === "genres" ? <ListItems items={genres} /> : null}
        </>
    )
}

export default FilterBlocks;

function ListItems({ items }) {
    const List = items.map(i => <li className="line _btn-text" key={i.id}>{i.name}</li>)
    return (
        <div className="popupblock" >
            <div className="popupcontainer " >
                <ul className="popup " >
                    {List}
                </ul>
            </div>
        </div>
      )
}