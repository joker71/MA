import { Component, Input, OnInit } from '@angular/core';
import { CmtserviceService } from '../service/cmtservice.service';

@Component({
  selector: 'app-cmt-component',
  templateUrl: './cmt-component.component.html',
  styleUrls: ['./cmt-component.component.css']
})
export class CmtComponentComponent implements OnInit {
  cmts: any=[];
  @Input() bookid:any
  constructor(private cmtService: CmtserviceService) { }
  ngOnInit(): void {
    this.cmtService.getCmtbyBookid(this.bookid).subscribe(data=>{
      this.cmts=data;
    })
  }

}
