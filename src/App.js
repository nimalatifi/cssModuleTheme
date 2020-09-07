import React , {Component} from 'react';
import Button from './Components/button'
import DarkTheme from './DarkTheme.module.scss';
import LightTheme from './LightTheme.module.scss';
import CustomTheme from './CustomeTheme.module.scss';
import './App.css';
import ThemeContext from './themeContext'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DefaultTheme: LightTheme,
      customeTheme: CustomTheme,
      customThemeflag: false
    }
  }
  changeDefaultTheme = (themeName) => {
    this.setState({ DefaultTheme:  themeName });
  }
  applyCustomTheme = (flag) => {
    this.setState({ customThemeflag:  flag });
    console.log(this.state.customThemeflag)
  }
  render() {
    return (
      <ThemeContext.Provider value={{state: this.state }}>
          <div className="app">
            <div className="asid">
              <button className={LightTheme.btn} onClick={() => this.changeDefaultTheme(LightTheme)} >Light </button>
              <button className={DarkTheme.btn} onClick={() => this.changeDefaultTheme(DarkTheme)} >Dark </button>
              <button onClick={() => this.applyCustomTheme(!this.state.customThemeflag)} >Custom Theme</button>
            </div>

            <div className="main">
              <Button  text={'outerComp'} />
            </div>
          </div>
       </ThemeContext.Provider>
    );
  }
}

export default App;


