import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import * as data from '../configs/buttonConfig.json'
import { ButtonProps } from '../models/button-props';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() { 
    console.log(data.flows.find(flowname=>flowname.flow==='default'));
  }

  getButtonBlock(flowname:any){
    if (flowname!=null){
      return data.flows.find(x=>x.flow===flowname)?.buttons?data.flows.find(x=>x.flow===flowname)?.buttons:[]
    }
    return []
  }
}
