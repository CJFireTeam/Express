import Citas from "./citas";

export default interface Icitas {
  Create(cita: Citas): Promise<Citas>;
  find(titulo: string): Promise<Citas>;
  findAll(): Promise<Citas[]>;
  update(cita: Citas): Promise<Citas>;
  delete(titulo: string): Promise<boolean>;
}