import { Component, OnInit } from '@angular/core';
import { BlockButtons } from '../models/block-buttons';
import { ButtonProps } from '../models/button-props';
import { ConfigService } from '../services/config.service'

@Component({
  selector: 'app-button-block',
  templateUrl: './button-block.component.html',
  styleUrls: ['./button-block.component.css']
})
export class ButtonBlockComponent implements OnInit {
  public showCancel: boolean = false;
  public showSignUp: boolean=false;
  public showLogin: boolean=false;
  public showOk: boolean=false;

  configService: ConfigService;
  constructor(configService : ConfigService) { 
    this.configService=configService;
  }

  ngOnInit(): void {
      var displayButtons = this.configService.getButtonBlock('default')
      console.log(displayButtons)
      this.showCancel = displayButtons?.find(x=>x.name.toLowerCase()==="cancel")?.show=='true'?true:false;
      this.showSignUp= displayButtons?.find(x=>x.name.toLowerCase()==="signup")?.show=='true'?true:false;
      this.showLogin= displayButtons?.find(x=>x.name.toLowerCase()==="login")?.show=='true'?true:false;
      this.showOk= displayButtons?.find(x=>x.name.toLowerCase()==="ok")?.show=='true'?true:false;
  }

}
