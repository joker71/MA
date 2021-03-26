import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BookserviceService } from "./service/bookservice.service"
import { BookComponentComponent } from './book-component/book-component.component'
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBookComponent } from './header-book/header-book.component';
import { CmtComponentComponent } from './cmt-component/cmt-component.component';
import { BookinforComponent } from './bookinfor/bookinfor.component';
@NgModule({
  declarations: [
    AppComponent,
    BookComponentComponent,
    HeaderBookComponent,
    CmtComponentComponent,
    BookinforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [BookserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
