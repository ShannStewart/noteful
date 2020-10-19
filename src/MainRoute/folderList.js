import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class FolderList extends Component{
    render(){

        const name = this.props.name;   
        const id = this.props.id;
        //console.log("id: " + id);

        return (
            <div>
                <Link to={`/folder/${id}`} onClick={() => this.props.onFolder(id)}>{name}</Link>
            </div>
        )
    }
        
}

export default FolderList