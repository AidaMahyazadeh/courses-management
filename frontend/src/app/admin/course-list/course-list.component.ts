import { Component, OnInit } from '@angular/core';
import ICourse from 'src/app/core/models/course.model';
import { CoursesListService } from 'src/app/core/services/admin/courses-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
courses !:ICourse[];

constructor(private coursesListService:CoursesListService){}

ngOnInit() {
  this.coursesListService.getAllCourses().subscribe(
    res=>this.courses=res
  )
}

onDelete(id:number){
  this.courses= this.courses.filter(course=>course.id!=id)
}
}
