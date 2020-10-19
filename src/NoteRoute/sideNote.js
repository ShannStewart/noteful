import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class NoteSide extends Component{
    constructor(props){
        super(props)
        console.log("NoteSide ran");
    }

    render(){

        const data = this.props.data;

        //console.log("data: " + data);

        const selected = this.props.selected;

        //console.log("Note selected: " + selected);

        const selectedNote = data.notes.find(note => note.id === selected);

        //console.log("Selected note: " + selectedNote);

        const selectedFolder = selectedNote.folderId;

        //console.log("selected folder: " + selectedFolder);
        
        const folder = data.folders.find(folder => folder.id === selectedFolder);

        //console.log("folderName: " + folder);
        
        const folderName = folder.name;
        
        return(
            <div>
                <p className='highlight'>{folderName}</p>
                <button onClick={() => this.props.onBack() }	>Back</button>
            </div>
        )

    }

}

export default NoteSide