import { BrowserModule } from '@angular/platform-browser'; //
import { NgModule } from '@angular/core';//
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';//
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';//
import { RouterModule } from '@angular/router';
import { ListPersonsComponent } from './persons/list-persons/list-persons.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from '@angular/material/select';
import {MatStepperModule} from "@angular/material/stepper";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import { AddPersonComponent } from './persons/add-person/add-person.component';
import { DetailPersonComponent } from './persons/detail-person/detail-person.component';
import { UpdatePersonComponent } from './persons/update-person/update-person.component';
import {PersonsService} from './services/persons.service';
import {MatMenuModule} from '@angular/material/menu';
import { DetailssComponent } from './persons/detailss/detailss.component';





@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListPersonsComponent,
    AddPersonComponent,
    DetailPersonComponent,
    UpdatePersonComponent,
    DetailssComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule,
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        HttpClientModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatStepperModule,
        AppRoutingModule,
        RouterModule,
        MatMenuModule
    ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
