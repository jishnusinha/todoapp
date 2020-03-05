import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { GettaskComponent } from './gettask/gettask.component';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule } from '@angular/material';
import { AmazingTimePickerModule } from 'amazing-time-picker'; // this line you need


@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    GettaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDatepickerModule ,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule,
    AmazingTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
