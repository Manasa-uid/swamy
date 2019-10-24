import { Component, OnInit } from '@angular/core';
import { DynamicdataService } from '../Dynamicdata.Service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   mno:any=[];
  
  constructor(private eng:DynamicdataService) { }

  ngOnInit() {
    this.eng.fun().subscribe(data=>(this.mno=data));
  }
  
    
  
  
}
