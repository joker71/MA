import { Component, Input, OnInit } from '@angular/core';
import { CmtserviceService } from '../service/cmtservice.service';

@Component({
  selector: 'app-cmt-component',
  templateUrl: './cmt-component.component.html',
  styleUrls: ['./cmt-component.component.css']
})
export class CmtComponentComponent implements OnInit {
  constructor(private cmtService: CmtserviceService) { }
  cmts: any=[];
  ngOnInit(): void {
  }
  Get(id:any): any{
  this.cmtService.getCmtbyBookid(id).subscribe((data:{})=>{
    this.cmts= data;
    console.log(data);
  })
}
}
