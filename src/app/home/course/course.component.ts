import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor() { }
  @Input() course;
  listCourseCheckout = [];


  ngOnInit() {
    // console.log(this.course);
    // console.log(this.listCourseChesckout);
    
  }

  addCourse(course) {
    this.listCourseCheckout = [...this.listCourseCheckout, course]
    console.log(this.listCourseCheckout);
    

    Swal.fire({
      title: 'Đăng ký khóa học này',
      // text: "Đăng ký khóa học này",
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Ghi danh thành công!',
          icon: 'success'
        })
      }
    })
  }

}
