import { analyzeAndValidateNgModules, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { Cmt } from '../model/Cmt';
import { CmtserviceService } from '../service/cmtservice.service';
@Component({
  selector: 'app-creat-coment',
  templateUrl: './creat-coment.component.html',
  styleUrls: ['./creat-coment.component.css']
})
export class CreatComentComponent implements OnInit {
  bookid: any;
  userid: string;
  cmtid: string;
  cmtdec: any;
  function: any="creat";
  content = new FormControl('');
  constructor(private cmtService: CmtserviceService) {
    this.bookid= 1;
    this.userid="01";
    this.cmtdec=1;
    this.cmtid="0" + this.userid;
   }


  ngOnInit(): void {
  }
  addcoment()
  {
     var newCmt= new Cmt(this.bookid, this.userid, this.cmtid, this.content.value, this.cmtdec);
     this.cmtService.addConment(newCmt);
  }
  reply(){
    this.function="reply";
    this.cmtdec++;
    var newCmt= new Cmt(this.bookid, this.userid, this.cmtid, this.content.value, this.cmtdec);
    console.log(newCmt);
    this.cmtService.addConment(newCmt);
  }

}
