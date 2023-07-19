
export interface CourseInterface{

    id: string
    nombre: string
    categoria: string
    nivel_curso:string
    numero_max_estudiantes: number
    codigo_curso:string
    created_at:string
    estado: string
    valoraciones: number
    estudiantes: null
    description:string;
    profesores: null
  
  }
  
  export interface ErrorCourses{
    message:string,
    isError:boolean
  }
