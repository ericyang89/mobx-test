import React from 'react';
import {observable, action, runInAction} from 'mobx'
import {observer} from 'mobx-react'
const request=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(100)
    },2e3)
  })
}

class Store{
  @observable count=0
  @action inc(){
    this.count+=1;
  }
  @action dec(){
    this.count-=1;
  }
  @action syncInc(){
    this.count-=1;
    request().then((asyncValue)=>{
      runInAction(()=>{
        console.log(asyncValue)
        this.count+=asyncValue
      });
    });
  }
}


export default new Store();