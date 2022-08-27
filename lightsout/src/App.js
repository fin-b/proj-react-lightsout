import './App.css'
import { Grid } from './components/Grid'
import logo from './logo.svg'

function App () {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-content'>
          <img src={logo} className='App-logo' alt='logo' />
          <div className='App-header'>Lights Out</div>
          <Grid></Grid>
        </div>
      </div>
    </div>
  )
}

export default App
