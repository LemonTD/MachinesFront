import { Component, OnInit } from '@angular/core';
// import { Machine } from '../machine';
import { DataService } from '../data.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machines = [];
  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.machines = data;
    })
  }
  machineList = [
    this.ngOnInit()
  ]
}
