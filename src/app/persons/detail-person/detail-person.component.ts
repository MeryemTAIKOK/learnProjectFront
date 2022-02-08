import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/persons.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonsService} from '../../services/persons.service';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  mode: number = 1;
  person: Person = new Person();
  personId: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private personsService: PersonsService) {
    this.personId=activatedRoute.snapshot.params.personId;
  }

  ngOnInit(): void {
    this.personsService.getPersonById(this.personId).subscribe(data => {
      this.person = data as Person;
    }, error => console.log(error));

    if (!navigator.geolocation) {
      // if the navigator doesn't support the geolocation
      console.log('location is not supported');
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        //  this.person.len = position.coords.latitude;
        //this.person.log = position.coords.longitude;
        console.log(`lat: ${position.coords.latitude},lon:${position.coords.longitude}`);

      });
  }
  update(person: Person) {
    console.log(person.personId)
    const uploadData = new FormData();
    uploadData.append('person', JSON.stringify(person));
    this.personsService.updatePerson(this.personId, uploadData)
      .subscribe(data => {
        this.person = data as Person;
        this.mode = 2;
        console.log("ok");
      }, error => {
        console.log(error);
      });
  }

}
