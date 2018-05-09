import React, { Component } from 'react';
import './App.css';
import MovieList from "../MovieList";
import MovieTabs from "../MovieTabs";
import LoginForm from "../LoginForm";

class App extends Component {

    constructor() {
        super();

        this.state = {
            type: 'now_playing',
            showList: true,
            user: null,
            session_id: null
        };
    }

    changeTab = tab => {
        this.setState({
            type: tab
        })
    };

    getSession = session_id => {
        console.log(session_id);
        this.setState({
            session_id: session_id
        });
    };


  render() {
        const { type, session_id } = this.state;
    return (
     <div>
         {session_id ?
             <div>
                <div className="header">
                     <MovieTabs type={type} changeTab={this.changeTab}/>
                </div>
                <div className="container">
                     <MovieList type={type}/>
                </div>
             </div>
             :
             <LoginForm getSession={this.getSession}/>}
     </div>
    );
  }
}

export default App;
