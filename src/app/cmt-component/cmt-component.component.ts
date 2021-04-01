import { Component, Input, OnInit } from '@angular/core';
import { CmtseviceService } from '../service/cmtsevice.service'
import {Cmt} from '../model/Cmt'
import { UserserviceService } from '../service/userservice.service';
@Component({
  selector: 'app-cmt-component',
  templateUrl: './cmt-component.component.html',
  styleUrls: ['./cmt-component.component.css']
})
export class CmtComponentComponent implements OnInit {

  @Input() id: any
  cmt: any=[];
  constructor(private cmtSer:CmtseviceService, private userSer: UserserviceService) { }

  ngOnInit(): void {
    this.cmtSer.getCmtByID(this.id).subscribe((data:{})=>{
      this.cmt = data;
      //this.cmt.username= this.getUser(this.cmt.userid);
    });
    console.log(this.cmt);
  }
  getUser(userid: number): any{
    let user: any= this.userSer.getUserById(userid).subscribe();
    console.log(user);
    return user.username;
  }
}
