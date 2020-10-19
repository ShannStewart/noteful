import React from 'react';
import { Component } from 'react';
import NoteList from './noteList.js';

class FolderMain extends Component{
    constructor(props){
        super(props);
        console.log("FolderMain ran");
    }


    render(){

        const data = this.props.data;
        //console.log("mainFolder data:" + data);

        const selected = this.props.selected;

        const filterList = data.notes.filter(note => note.folderId === selected);

        //console.log("New note list: " + filterList);

        const noteList = filterList.map((note, i) =>
        <NoteList
            key={i} 
            name={note.name} 
            date={note.modified}
            id={note.id}
            onNote={this.props.onNote}/>)

        return(
            <div>
                {noteList}
            </div>
        )
    }   
}

export default FolderMain;