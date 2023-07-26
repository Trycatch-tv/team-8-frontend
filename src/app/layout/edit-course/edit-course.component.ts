import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/services/api/course/course.service';



@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent {


  constructor(private courseservice:CourseService , private route:ActivatedRoute,private router: Router, private toastr: ToastrService){}



  id:any;
  nombre:string='';
  categotia:string='';
  nivel:string='';
  codigo:string='';
  max:string='';
  valoracion:string='';
  estado:string='';
  descripcion:string='';
  datos:any=[];



  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  async duerme() {
    console.log('Inicio');
    await this.sleep(3000);
    this.router.navigate(['/dashboard-admin/content-courses']);
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.courseservice.get_course_detail(this.id).subscribe((data:any)=>{
      ({nombre:this.nombre, categoria:this.categotia,nivel_curso:this.nivel,codigo_curso:this.codigo,numero_max_estudiantes:this.max, valoraciones:this.valoracion,estado:this.estado,description:this.descripcion} = data)
      this.datos = data;
    },
    (error)=>{
      this.toastr.error(error)
    }
    )
  }


  send_values(){
   const formData = new FormData();
   formData.append("nombre",this.nombre);
   formData.append("categoria",this.categotia);
   formData.append("nivel_curso",this.nivel);
   formData.append("codigo_curso",this.codigo);
   formData.append("numero_max_estudiantes",this.max);
   formData.append("valoraciones",this.valoracion);
   formData.append("estado",this.estado);
   formData.append("description",this.descripcion);

   this.courseservice.update_course(formData,this.id).subscribe((data:any)=>{
        this.showSuccess()
       this.duerme()
   },
   (error) => {
    this.toastr.error(error)
     // Aquí puede manejar cualquier error que haya ocurrido
   })

 }


 showSuccess() {
  for (let i = 3; i >= 1; i--) {
    setTimeout(() => {
      this.toastr.info(`Editado Correctamente, en ${i.toString()} segundos seras redireccionado`);
    }, (3 - i) * 1000);
  }
}


}
