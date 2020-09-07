import React  from 'react'
import ThemeContext from '../themeContext'
export default function InnerComponent(props) {
    return (
        <ThemeContext.Consumer>
        {
             context=>(
                 <span className={context.state.DefaultTheme.inner}>innerComp</span>
             )
        }
        </ThemeContext.Consumer>
    )
}