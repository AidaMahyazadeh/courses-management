import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../core/services/courses.service';
import ICourse from '../core/models/course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  courses !:ICourse[];
  searchedCourse !:string;

  constructor(private coursesService:CoursesService){}

  ngOnInit(){
    this.coursesService.getAllCourses().subscribe(
      res => this.courses=res
    )
  }

  onSearchedCourse(searchText :string){
   this.searchedCourse=searchText
  }

  addItemToCart(){
    
  }
}
