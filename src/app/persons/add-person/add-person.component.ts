import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonsService} from '../../services/persons.service';
import {Person} from '../../model/persons.model';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  mode: number = 1;
  person: Person = new Person();



  constructor( private router:Router,private personService:PersonsService) { }

  ngOnInit(): void {
    if (!navigator.geolocation) {
      // if the navigator doesn't support the geolocation
      console.log('location is not supported');
      //this.person.len=11;
      //this.person.log=5;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
      //  this.person.len = position.coords.latitude;
        // this.person.log = position.coords.longitude;
        console.log(`lat: ${position.coords.latitude},lon:${position.coords.longitude}`);

      });
  }
  add(person: any) {
    const uploadData = new FormData();
    console.log(person)
    uploadData.append('person', JSON.stringify(person));
    this.personService.addPerson(uploadData)
      .subscribe(data => {
        console.log(data)
        this.person = data as Person;
        this.mode = 2;
        console.log("ok");
      }, error => {
        console.log(error);
      });
  }
 /* add(persons: any) {
    const uploadData = new FormData();
    console.log(" Meryem test add 11111111111")
    console.log(persons)
    uploadData.append('persons', JSON.stringify(persons));

    this.personService.addPerson(uploadData)
      .subscribe(data => {

        console.log(uploadData);
        this.person = data as Person;
        console.log(" Meryem test add 3")
        console.log(data);
        console.log(" Meryem test add 4")
        this.mode = 2;
        console.log("ok");
      }, error => {
        console.log(error);
      });
  }*/



}
