import { Component, OnInit } from '@angular/core';
import { BookserviceService } from "../service/bookservice.service"
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {
  id:any;
  constructor(private bookService: BookserviceService ){}
  bookList: any=[];
  ngOnInit(): void {
    this.bookService.getBook().subscribe(data=>{
      this.bookList= data;
    })
  }
  DirectFunction(idbook: any){
    
  }

}
