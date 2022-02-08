import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/persons.model';
import {Router} from '@angular/router';
import {PersonsService} from '../../services/persons.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {

  persons: Array<Person> = new Array<Person>();
  persons1: Array<Person> = new Array<Person>();
  currentPage: number = 0;
  size = 4;
  pages: any;

  constructor( private router:Router,private personService:PersonsService) { }

  ngOnInit(): void {
    this.personService.getPersons().subscribe( (data: any) => {
      this.persons=data
      console.log(data);
    }, error => console.log(error));

  }
  updatePerson(personId: any) {
    this.router.navigateByUrl("persons/"+personId);
  }
  daletePerson(person: Person) {
    const confirm = window.confirm('Do you want really to delete this Person info??');
    if (confirm == true) {
      this.personService.daletePerson(person.personId)
        .subscribe(data => {
          this.persons.splice(this.persons.indexOf(person), 1);
        }, error => {
          console.log(error);
        });
    }
  }

  goToPage(i: number) {

  }


}
