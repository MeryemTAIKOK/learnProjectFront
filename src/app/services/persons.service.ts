import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../model/persons.model';


@Injectable()
export class PersonsService {
  constructor(private  http: HttpClient) { }


  getPersons(){
    return this.http.get('http://localhost:8080/persons');
  }


  addPerson(persons: FormData) {
    return this.http.post('http://localhost:8080/persons', persons);
  }

  updatePerson(personId: number, person: FormData) {
    return this.http.put('http://localhost:8080/persons/'+personId, person);
  }
 /* update(article:Article){

    return this.http.put('http://localhost:8080/articless/'+article.idArticle,article);
  }*/
  update(person: Person){

    return this.http.put('http://localhost:8080/persons/'+person.personId,person);
  }

  daletePerson(personId: number){
    return this.http.delete('http://localhost:8080/persons/'+personId);
  }

  getPersonById(personId: number) {
    return this.http.get('http://localhost:8080/persons/'+personId);
  }


}
