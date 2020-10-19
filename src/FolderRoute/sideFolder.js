import React, { Component } from 'react';
import FolderList from './folderList.js'

class FolderSide extends Component{
    constructor(props){
        super(props);
        console.log("FolderSide ran");
    }

    
    render(){

        const data = this.props.data;

        const folderList = data.folders.map((folder, i) => 
        <FolderList
            key={i}
            name={folder.name}
            id={folder.id}
            onFolder={this.props.onFolder}
            selected={this.props.selected}
        />)

        return (
            <div>
                {folderList}
                <button onClick={() => this.props.onBack() }	>Back</button>
            </div>
        )
    }
        
}

export default FolderSide