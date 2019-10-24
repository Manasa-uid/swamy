
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  emp:any=[];

  constructor(private abc:DataserviceService) { }

  ngOnInit() {
    this.abc.xyz().subscribe(data=>(this.emp=data));
    // console.log(this.emp)
  }

}
