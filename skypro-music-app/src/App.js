import React from 'react';
import './App.css';
import BarAudioPlayer from './components/BarAudioPlayer';
import NavMenu from './components/NavMenu'
import SiderBar from './components/SiderBar'
import TrackList from './components/TrackList';





function App() {
  return (
    <div className="wrapper">
    <div className="container">
      <main className="main">
       <NavMenu/>
       <TrackList/>
        <SiderBar/>
      </main>
       <BarAudioPlayer />
      <footer className="footer"></footer>
    </div>
  </div>
  );
}

export default App;
