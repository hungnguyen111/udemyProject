import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: any;
  detailCourse: any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParamsFromUrl();
    this.getCourseDetail();
  }

  getParamsFromUrl(){
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.activatedRoute);
    
  }

  getCourseDetail(){
    this.dataService.getCourseDetail(this.id).subscribe(data =>{
      console.log(data);
      this.detailCourse = data
    })
  }

}
