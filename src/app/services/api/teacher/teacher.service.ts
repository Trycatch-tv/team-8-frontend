import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/app/shared/helpers/prod_dev';

@Injectable({
  providedIn: 'root'
})
export class TeacherService   {

  constructor(private http:HttpClient) { }



  getlist_teachers() {
    return this.http.get<any[]>(`${apiUrl}list_teachers/`);
  }


  //Delete Http
    deleteTeacher(id: number) {
      return this.http.delete(`${apiUrl}delete_teacher/${id}/`);
    }



  //ADD Htpp
  add_teacher(formdata:any){
    //console.log(formData)
    return this.http.post<any>(`${apiUrl}add_teacher/`,formdata);
  }



  //Get update detail
  get_teacher_detail(id:any){
    return this.http.get(`${apiUrl}update_teacher/${id}/`);
  }

    //Put Htpp

  update_teacher(formdata:any,id:any){
      return this.http.put(`${apiUrl}update_teacher/${id}/`, formdata);
  }



  login_teacher(formdata:any){
    return this.http.post(`${apiUrl}teacher-login/`, formdata);
  }










}
