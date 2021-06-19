import { TipoUsuario } from './TipoUsuario';
import { Distrito } from './Distrito';
export class Usuario {
  idUsuario: number;
  dniUsuario: string;
  nombreUsuario: string;
  direccionUsuario: string;
  passwordUsuario: string;
  tipoUsuario: TipoUsuario;
  celularUsuario: string;
  distrito: Distrito;
  estadoUsuario: number;
  usuario: string;
}
