import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProfessor } from '../../models/professor.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  professorsUrl='../../assets/data/professore.data.json';

  constructor(private http :HttpClient) { }

  getAllProfessore():Observable<IProfessor[]>{
    return this.http.get<IProfessor[]>(this.professorsUrl)
  }

  addNewProfessor(newProfessor :IProfessor ):Observable<IProfessor>{
    return this.http.put<IProfessor>(this.professorsUrl,newProfessor)
  }

  
}
