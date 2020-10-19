import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NoteList extends Component {
    render(){
        
        const name = this.props.name;
        const date = this.props.date;
        const id = this.props.id;

        return(
            <div>
                <Link to={`/note/${id}`} onClick={() => this.props.onNote(id)}>{name} {date}</Link>
            </div>
        )
    }
}

export default NoteList

//<Link to={`/note/${id}`} onClick={() => this.props.onNote(id)}>{name} {date}</Link>