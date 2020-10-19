import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideFolderList extends Component{
    constructor(props){
        super(props);
        console.log("ID: " + this.props.id);
    }

    render(){

        const name = this.props.name;
        const id = this.props.id;
        const selected = this.props.selected;
        
        const highlight = (selected === id);
        //console.log("highlight: " + highlight);

        return (
            <div>
                {highlight
                    ?<Link className='highlight' to={`/folder/${id}`} onClick={() => this.props.onFolder(id)}>{name}</Link>
                    :<Link to={`/folder/${id}`} onClick={() => this.props.onFolder(id)}>{name}</Link>}
                
            </div>
        )
    }
        
}

export default SideFolderList