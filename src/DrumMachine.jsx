import './App.css'
import DrumPadContainer from './DrumPadContainer'

function DrumMachine() {

  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>
      <img src="/drums.png" alt='Drum icon'></img>
      <DrumPadContainer />
      <a href="https://www.flaticon.com/free-icons/drum" title="drum icons">Drum icons created by Freepik - Flaticon</a>
    </div>
  )
}

export default DrumMachine
