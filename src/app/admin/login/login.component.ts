import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem("UserAdmin")){
      this.router.navigate(["/admin/dashboard"])
    }
  }
  login(value) {
    const user = {
      taiKhoan: value.TaiKhoan,
      matKhau: value.MatKhau
    };
    this.dataService.login(user).subscribe((data: any) => {
      console.log(data);

      if (data.maLoaiNguoiDung === "GV") {
        localStorage.setItem("UserAdmin", JSON.stringify(data));
        alert("Login success");
        this.router.navigate(["/admin/dashboard"]);
      } else {
        alert("K co quyen truy cap");
      }
    });
  }
}
