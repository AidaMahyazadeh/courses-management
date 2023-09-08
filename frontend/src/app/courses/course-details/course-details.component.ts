import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import ICourse from 'src/app/core/models/course.model';
import { CartService } from 'src/app/core/services/cart.service';

import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  subscription !:Subscription;
  selectedCourse !:ICourse[];
  id !:number;
  constructor(
    private courseService:CoursesService,
    private activatedRoute :ActivatedRoute,
    private router :Router,
    private cartService :CartService
    ){}
  
    ngOnInit():void{
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.id = params['id']
    })
   this.subscription= this.courseService.getCourseById(this.id).subscribe(res=>{
      this.selectedCourse=res
      console.log(this.selectedCourse)
    })
    }

    backToAllCourses(){
      this.router.navigate(['courses'])
     }

     addCourseToCart(course:ICourse){
      this.cartService.addToCart(course)
     }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }
   
}
