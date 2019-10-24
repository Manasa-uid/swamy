import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/Forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { DataserviceService } from './dataservice.service';
import { NewsComponent } from './news/news.component';
import { DynamicdataService } from './dynamicdata.service';
import { CrudoperationComponent } from './crudoperation/crudoperation.component';
import { LoginformComponent } from './loginform/loginform.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    NewsComponent,
    CrudoperationComponent,
    LoginformComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataserviceService,DynamicdataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
