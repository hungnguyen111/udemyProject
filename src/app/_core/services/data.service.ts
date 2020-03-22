import { Injectable } from '@angular/core';

//import
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getListCourse(): Observable<any> {
    const url = 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP07';
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }

  getCourseDetail(maKhoaHoc): Observable<any> {
    const url = `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`;
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }

  login(user): Observable<any> {
    const url = 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this.http.post(url, user).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  }

  handleErr(err) {
    switch (err.status) {
      case 401:
        break;
      case 402:
        break;
      case 403:
        break;
      case 500:
        alert(err.error);
        break;
      default:
        break;
    }
    return throwError(err);
  }
}
