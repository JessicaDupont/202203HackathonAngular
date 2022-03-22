import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  departure:any[] = [['FR9140','RYANAIR','PALERME','06:30','04:00','1'],['TB2741','TUIFLY','TUNIS/CARTHAGE','06:30','04:00','1'],['TB2531','TUIFLY','CASABLANCA','06:30','04:00','1']];
  arrival:any[] = [['W63081','WIZZAIR','BUCAREST - OTOPENI','08:00','1'],['FR6729','RYANAIR','KRAKOW','08:30','1'],['FR1056','RYANAIR','VARSOVIE MODLIN','09:15','1']];
  constructor() {}

}
