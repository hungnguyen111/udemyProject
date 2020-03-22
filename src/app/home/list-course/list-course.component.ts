import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss']
})
export class ListCourseComponent implements OnInit {
  listCourse: [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getListCourse()
  }

  getListCourse(){
    this.dataService.getListCourse().subscribe((data: any)=>{
      console.log(data);
      this.listCourse = data;
    })
  }

}
