import React, { Component } from 'react';
import FolderList from './folderList.js'

class SideBar extends Component{
    constructor(props){
        super(props);
        console.log("Sidebar ran");
    }

    render(){

        const data = this.props.data;

        const folderList = data.folders.map((folder, i) => 
        <FolderList
            key={i}
            name={folder.name}
            id={folder.id}
            onFolder={this.props.onFolder}
        />)

        return (
            <div>
                {folderList}
            </div>
        )
    }
        
}

export default SideBar