import React from 'react';
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import store from './store'
import DevTools from 'mobx-react-devtools'
import Button from './Button'



@observer
class Counter extends React.Component{
  // count=0;
  handleDec=()=>{
    this.props.store.dec();
  }
  handleInc=()=>{
    this.props.store.inc();
  }
  handleIncAsyn=()=>{
    this.props.store.syncInc();
  }
  render(){
    const {store}=this.props
    return(
      <div>
      <DevTools/>
       counter: {store.count}<br/>
       <button onClick={this.handleDec}>-</button>
       <button onClick={this.handleInc}>+</button>
       <Button  onBtnClick={this.handleIncAsyn}/>
      </div>
    )
  }
}

const Wrapper=(Counter);

export default ()=>{
  return <Wrapper store={store}/>
};