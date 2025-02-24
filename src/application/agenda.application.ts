import { SupabaseClient } from "@supabase/supabase-js";
import Agenda from "../domain/agenda/agenda";
import example from '../domain/agenda/example.json';
export default class AgendaApplication {

  private _service: SupabaseClient<any, "public", any>;
  
  constructor(service: SupabaseClient<any, "public", any>) {
    this._service = service;
  }

  public getOne(user: number) {

    // llamado de servicio
      
    // 
    return new Agenda(example).json();
  }
}
