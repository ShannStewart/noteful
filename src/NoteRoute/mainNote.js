import React, { Component } from 'react';
import NoteData from './noteData'

class NoteMain extends Component {
    constructor(props){
        super(props)
        console.log('NoteMain ran');
    }

    render(){

        const data = this.props.data;
        const selected = this.props.selected;

        //console.log("Looking for note: " + selected);

        const currentNote = data.notes.find(note => note.id === selected);

        //console.log("Current note: " + currentNote);

        const noteData = 
        <NoteData
            id={currentNote.id}
            name={currentNote.name}
            modified={currentNote.modified}
            folderId={currentNote.folderId}
            content={currentNote.content}
        />;

        return(
            <div>
                {noteData}
            </div>
        )

    }
}

export default NoteMain;