import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlockButtons } from '../models/block-buttons';
import { ConfigService } from '../services/config.service';

@Injectable({
  providedIn: 'root'
})
export class ButtonBlockService {
  configService: ConfigService;
  activeRoute: ActivatedRoute;
  currentButton: BlockButtons;
  actionButton: any;
  constructor(configService: ConfigService, activatedRoute: ActivatedRoute, currentButton: BlockButtons, actionButton: any) {
    this.configService = configService;
    this.activeRoute = activatedRoute;
    this.currentButton=currentButton;
    this.actionButton = actionButton;
   }

   public executeAction () : any {
    
   }

}
