import './App.css'
import { Grid } from './components/Grid'
import logo from './logo.svg'

function App () {
  return (
    <div className='App'>
      <div className='App-container'>
        <div className='App-content'>
          {/*
              Logo provided by Reshot - https://www.reshot.com/
              Accessed under Reshot Free License - https://www.reshot.com/license/
              Image source - https://www.reshot.com/free-svg-icons/item/bohlam-6BPFM53A9S/
            */}
          <img src={logo} className='App-logo' alt='logo' />
          <div className='App-header'>Lights Out</div>
          <Grid></Grid>
        </div>
      </div>
    </div>
  )
}

export default App
