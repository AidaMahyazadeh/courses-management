import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProfessor } from 'src/app/core/models/professor.model';
import { ProfessorService } from 'src/app/core/services/admin/professor.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {
 professorForm !:FormGroup;
 newProfessor !:IProfessor;
 lengthProfessorsList !:number;
 @Output() newAddedProfessor = new EventEmitter <IProfessor>()
 emailPattern =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

 constructor(
  private professorService :ProfessorService,
  private activeModal:NgbActiveModal,
  ){}

 ngOnInit(){

   this.professorForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email,Validators.pattern(this.emailPattern)]),
    courses: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required)
   })
 }
 

 close(){
  this.activeModal.close()
 }

addProfessor(){
  if(this.professorForm.valid){
    this.newProfessor = this.professorForm.value
    this.newAddedProfessor.emit(this.newProfessor)
    console.log(this.newProfessor)
    this.professorForm.reset()
    this.close()
    // console.log(this.professorForm.value)
    //  this.professorService.addNewProfessor(this.professorForm.value).subscribe({
    //   next : res=>{
    //     this.newProfessor=res
    //     console.log(this.newProfessor)
    //   },
    //   error: err=>{
    //     console.log(err)
    //   }
    //  }
    //  )
  }
 
}
 }
