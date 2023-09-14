import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';
import { AddProfessorComponent } from '../add-professor/add-professor.component';
import { ModifyModalComponent } from '../modify-modal/modify-modal.component';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
professores !:IProfessor[];
newaddedprofessor !:IProfessor;
selectedProfessor !:IProfessor;


constructor(
  private professorsService:ProfessorService,
  private modalService :NgbModal
  ){}

ngOnInit() {
  this.professorsService.getAllProfessore().subscribe(
    res=>this.professores=res
  )
}

openModal(){
 const modalRef= this.modalService.open(AddProfessorComponent,{size:'lg'})
 modalRef.componentInstance.newProfessor=this.newaddedprofessor;
 modalRef.componentInstance.newAddedProfessor.subscribe((res :IProfessor)=>{
 this.professores.push(res)
 }
 )

}

getProfessorById(professorName :string):IProfessor{
 return this.selectedProfessor =this.professores.find(professor=>professor.name ==professorName)!
}

openModify(name:string){
this.getProfessorById(name)
const modalRef= this.modalService.open(ModifyModalComponent,{size:'lg'})
modalRef.componentInstance.selectedProfessor=this.selectedProfessor

}



onDeleteProfessor(id :number){
  this.professores=this.professores.filter(professor=>professor.id!=id)
}
}
