import { Usuario } from "./usuario";

export interface Sesion {
    usuario: Usuario;
    sesionActivada?: boolean;
}