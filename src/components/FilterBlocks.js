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
    const [showFilter, setShowFilter] = useState(null);
    // function showClick() {
    //     setShowFilter(showFilter)
    // }

    function showClick(filter){ 
        if (showFilter === filter) { 
          setShowFilter(null)
       } else {
          setShowFilter(filter)
       }
     } 
 


    return (
        <>
            <div className="filter__button button-author _btn-text" onClick={showClick("authors" )}>
                исполнителю
            </div>
           
            {showFilter === "authors" ? <ListItems items={authors}  /> : null }
            {/* {showFilter && <ListItems items={authors} />} */}
          
            <div className="filter__button button-year _btn-text" onClick={()=> setShowFilter("years")}>
                году выпуска
            </div>
            {showFilter === "years" ? <ListItems items={years}  /> : null }
            {/* {showFilter && <ListItems items={years} />} */}

            <div className="filter__button button-genre _btn-text" onClick={()=> setShowFilter("genres")} >жанру</div>
            {showFilter === "genres" ? <ListItems items={genres}  /> : null }
            
        </>
    )
}

export default FilterBlocks;


function ListItems({ items }) {
    const List = items.map(i => <li className="line _btn-text" key={i.id}>{i.name}</li>)
    return (
      <div className="popupblock" >
            <ul className="popup " >
                {List}
            </ul>
            </div>

    )

}