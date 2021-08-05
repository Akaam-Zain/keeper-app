import React from 'react';
import notes from './noteData';
import Note from './Note';

function Notes() {
    return notes.map((noteItem) =>

        <div className='note'>
            <h1 >{noteItem.title}</h1>
            <p>{noteItem.content}</p>
        </div>

    )
}

export default Notes;