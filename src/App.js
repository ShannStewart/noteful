import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import logo from './logo.svg';
import DUMMY from './dummy-store.js';
import './App.css'; 
import { Component } from 'react';

import Main from './MainRoute/main.js';
import SideBar from './MainRoute/sidebar.js';

import FolderMain from './FolderRoute/mainFolder';
import FolderSide from './FolderRoute/sideFolder.js';

import NoteMain from './NoteRoute/mainNote';
import NoteSide from './NoteRoute/sideNote';

class App extends Component {
  state = {
    folder: null,
    note: null,
  }

  handleFolder =  (selected) => {
    console.log("handleFolder ran: " + selected);

    this.setState({
      folder: selected,
    });
  
  }

  handleNote = (selected) => {
    console.log("handleNote ran: " + selected)

    this.setState({
      note: selected,
    });
  }

  handleReset = () => {
    console.log("handleReset ran");

    this.setState({
      folder: null,
      note: null,
    })
  }

  render(){

    console.log(DUMMY);
    return(

      <div>
        <header>
          <h1 className='noteful'>Noteful</h1>
        </header>
       <div className='changable'>
        <section className='sidebar'>
          <Switch>
              <Route exact path='/' render={() => {return <SideBar data={DUMMY} onFolder={this.handleFolder}/>}}/>
              <Route path='/folder' render={({ history }) => {return <FolderSide data={DUMMY} onFolder={this.handleFolder} selected={this.state.folder} onBack={history.goBack}/>}}/>
              <Route path='/note'render={({ history })=> {return <NoteSide data={DUMMY} selected={this.state.note} onBack={history.goBack}/>}}/>
            </Switch>
        </section>
        <section className='mainPanel'>
          <Switch>
            <Route exact path='/' render={() => {return <Main data={DUMMY} onNote={this.handleNote} onReset={this.handleReset}/>}}/>
            <Route path='/folder' render={() => {return <FolderMain data={DUMMY} onNote={this.handleNote} selected={this.state.folder}/>}}/>
            <Route path='/note' render={() => {return <NoteMain data={DUMMY} selected={this.state.note}/>}}/>
          </Switch>
        </section>
       </div>
       
      </div>

    );
  }

}

export default App;
