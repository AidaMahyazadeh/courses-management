import { Component, OnInit } from '@angular/core';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
professores !:IProfessor[];

constructor(private professorsService:ProfessorService){}

ngOnInit() {
  this.professorsService.getAllProfessore().subscribe(
    res=>this.professores=res
  )
}

onDelete(id :number){
  this.professores=this.professores.filter(professor=>professor.id!=id)
}
}
