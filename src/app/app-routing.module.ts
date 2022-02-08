import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MapComponent} from './map/map.component';
import {ListPersonsComponent} from './persons/list-persons/list-persons.component';
import {AddPersonComponent} from './persons/add-person/add-person.component';
import {DetailPersonComponent} from './persons/detail-person/detail-person.component';
import {UpdatePersonComponent} from './persons/update-person/update-person.component';
import {DetailssComponent} from './persons/detailss/detailss.component';


const routes: Routes = [
  {path: '', redirectTo: '/persons', pathMatch : 'full'},
  {path: 'persons', component: ListPersonsComponent}, // { path: '**', component: PageNotFoundComponent },
  {path: 'map', component: MapComponent},
  {path: 'addPerson', component: AddPersonComponent},
  {path: 'persons/:personId/details', component: DetailPersonComponent},
  {path: 'persons/:personId/', component: UpdatePersonComponent},
  {path: 'persons/:personId/detailss', component: DetailssComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }






