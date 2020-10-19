import React, { Component } from 'react';

class NoteList extends Component {
    render(){
        
        const name = this.props.name;
        const date = this.props.date;

        return(
            <div>
                <p>{name} {date}</p>
            </div>
        )
    }
}

export default NoteList