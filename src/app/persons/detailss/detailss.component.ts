import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/persons.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonsService} from '../../services/persons.service';

@Component({
  selector: 'app-detailss',
  templateUrl: './detailss.component.html',
  styleUrls: ['./detailss.component.css']
})
export class DetailssComponent implements OnInit {
  personId: number;
  person: Person = new Person();

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private personsService: PersonsService) {
    this.personId = activatedRoute.snapshot.params.personId;
  }

  ngOnInit(): void {



      this.personsService.getPersonById(this.personId).subscribe(data => {
        this.person = data as Person;
        console.log(data);
      }, error => console.log(error));

  }

}
