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
  buttonConfigName:string='default';

  configService: ConfigService;
  constructor(configService : ConfigService) { 
    this.configService=configService;
  }

  ngOnInit(): void {
    this.displayButtonsforPage();
  }

  private displayButtonsforPage()
  {
    var displayButtons = this.configService.getButtonBlock(this.buttonConfigName)
    this.showCancel = displayButtons?.find(x=>x.name.toLowerCase()==="cancel")?.show.toLowerCase()=='true'?true:false;
    this.showSignUp= displayButtons?.find(x=>x.name.toLowerCase()==="signup")?.show.toLowerCase()=='true'?true:false;
    this.showLogin= displayButtons?.find(x=>x.name.toLowerCase()==="login")?.show.toLowerCase()=='true'?true:false;
    this.showOk= displayButtons?.find(x=>x.name.toLowerCase()==="ok")?.show.toLowerCase()=='true'?true:false;
  }
  // functions to handle the key clicks
  buttonClicked(event: any){
    console.log("button clicked", event)
    console.log(event._elementRef.nativeElement.id)
  }
}
