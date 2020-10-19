import React, { Component } from 'react';
import NoteList from './noteList.js';

class Main extends Component {
    constructor(props){
        super(props);
        console.log("Main ran");
        this.props.onReset();
    }

    render(){

        const data = this.props.data;

        //console.log(data);

        const noteList = data.notes.map((note, i) =>
        <NoteList
            key={i} 
            name={note.name} 
            date={note.modified}
            id={note.id}
            onNote={this.props.onNote}
            />)

        return(
            <div>
                {noteList}
            </div>
        )
    }
}

export default Main;