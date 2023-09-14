import { Component, OnInit } from '@angular/core';
import { AuthStorageService } from 'src/app/core/services/auth/auth-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  adminName:string ='';
  constructor(private authStorageService : AuthStorageService){}

  ngOnInit(): void {
    this.adminName= this.authStorageService.getUserName()
  }

}
