import React, { Component } from 'react';

class NoteData extends Component {
    constructor(props){
        super(props)
        console.log("NoteData ran");
    }

    render(){

        //const id= this.props.id;
        const name= this.props.name;
        const modified= this.props.modified;
        //const folderId= this.props.folderId;
        const content= this.props.content;

        return(
            <div>
                <h2>{name}</h2>
                <h3>{modified}</h3>
                <p>{content}</p>
            </div>
        )

    }
}

export default NoteData