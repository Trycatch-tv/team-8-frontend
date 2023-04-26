export interface User {
  id: number;
  nombre: string;
  correo: string;
  ciudad: string;
  telefono: number;
  estado: string;
  created_at: string;
  contrasena: string;
  id_curso: number | null;
  id_profesor: number | null;
}
