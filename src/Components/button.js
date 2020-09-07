import React  from 'react'
import InnerComponent from './innerComponent'
import ThemeContext from '../themeContext'
export default function Button(props) {
    return (
       <ThemeContext.Consumer>
           {
               context=>(
                      <div  className={`${context.state.DefaultTheme.btn}  ${context.state.DefaultTheme.fontColor} 
                         ${context.state.customThemeflag ? context.state.customeTheme.btn :""}`}>
                             <InnerComponent theme={props.theme}/>
                             {props.text}
                      </div>
               )
           }
          
       </ThemeContext.Consumer>
    )
}

// class button extends Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props)
//       }
//     state = {  }
//     render() { 
//         return (
//             <div  className={[this.props.theme.btn, this.props.theme.fontColor].join(" ")}>
//            {this.props.children}
//         </div>
//           );
//     }
// }
 
// export default button;