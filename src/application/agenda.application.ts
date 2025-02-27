import { SupabaseClient } from "@supabase/supabase-js";
import Agenda from "../domain/agenda/agenda";
import example from '../domain/agenda/example.json';
export default class AgendaApplication {


  constructor() {
  }

  public getOne(user: number) {

    // llamado de servicio

    // 
    return new Agenda(example).json();
  }

  public async  create(agendaData: any,supabase:SupabaseClient<any, "public", any>) {
    try {
      const id =  await supabase.auth.getUser();
      const agendaWithOwner = {...agendaData,owner:(await supabase.auth.getUser()).data.user?.id};
      const agenda =  new Agenda(agendaWithOwner).json();
      console.log(agenda)
      const {error} = await supabase.from('agenda').insert(agenda);
      if (error) throw error
      return agenda;
    } catch (error) {
      throw error
    }
  }
}
