import String from "../../shared/valueObjects/String";
import Date from "../../shared/valueObjects/Date";

export default class Citas {
  _titulo: String;
  _descripcion: String;
  _fecha: Date;
  _hora: String;
  _ubicacion: String;

  constructor(
    titulo: string,
    descripcion: string,
    fecha: string,
    hora: string,
    ubicacion: string,
    fechaCreacion: string,
    fechaActualizacion: string
  ) {
    this._titulo = new String(titulo);
    this._descripcion = new String(descripcion);
    this._fecha = new Date(fecha);
    this._hora = new String(hora);
    this._ubicacion = new String(ubicacion);
  }

  public get titulo(): String {
    return this._titulo;
  }
  public get descripcion(): String {
    return this._descripcion;
  }
  public get fecha(): Date {
    return this._fecha;
  }
  public get hora(): String {
    return this._hora;
  }
  public get ubicacion(): String {
    return this._ubicacion;
  }
  

  public set settitulo(value: string) {
    this._titulo = new String(value);
  }
  public set setdescripcion(value: string) {
    this._descripcion = new String(value);
  }
  public set setfecha(value: string) {
    this._fecha = new Date(value);
  }
  public set sethora(value: string) {
    this._hora = new String(value);
  }
  public set setubicacion(value: string) {
    this._ubicacion = new String(value);
  }
  

  public Json() {
    return {
      titulo: this.titulo.value,
      descripcion: this.descripcion.value,
      fecha: this.fecha.value,
      hora: this.hora.value,
      ubicacion: this.ubicacion.value,
    };
  }
}
