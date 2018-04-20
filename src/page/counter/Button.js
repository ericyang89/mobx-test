import React from 'react';
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import DevTools from 'mobx-react-devtools'



class Button extends React.Component{

  render(){
    return(
      <div>
     
       <button onClick={this.props.onBtnClick}>++##</button>
      </div>
    )
  }
}


export default Button;