import { SupabaseClient } from "@supabase/supabase-js";
import Agenda from "../domain/agenda/agenda";
import example from "../domain/agenda/example.json";
export default class AgendaApplication {
  constructor() {}

  public getOne(user: number) {
    // llamado de servicio

    //
    return new Agenda(example).json();
  }

  public async create(
    agendaData: any,
    supabase: SupabaseClient<any, "public", any>
  ) {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (!user) throw new Error("Usuario no autenticado");

      // Validación de fechas
      if (!agendaData.startDate) throw new Error("startDate es requerido");
      const startDate = new Date(agendaData.startDate);
      if (isNaN(startDate.getTime())) throw new Error("Fecha inválida");

      // Calcular semana
      const { weekStart, weekEnd } = this.getWeekRange(startDate);

      // Verificar agendas existentes
      const { data, error: queryError } = await supabase
        .from("agenda")
        .select("*")
        .eq("user_id", user.id)
        .gte("startDate", weekStart.toISOString())
        .lt("startDate", weekEnd.toISOString());

      if (queryError) throw queryError;
      if (data?.length > 0) throw new Error("USER_ALREADY_HAS_AGENDA_IN_WEEK");

      // Insertar nueva agenda
      const agendaWithUserId = {
        ...agendaData,
        user_id: user.id,
      };

      const { error } = await supabase.from("agenda").insert(agendaWithUserId);
      if (error) throw error;

      return agendaWithUserId;
    } catch (error) {
      throw error;
    }
  }

  private getWeekRange(date: Date): { weekStart: Date; weekEnd: Date } {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    const day = d.getUTCDay();
    const diff = d.getUTCDate() - day + (day === 0 ? -6 : 1);

    const weekStart = new Date(d.setUTCDate(diff));
    const weekEnd = new Date(weekStart);
    weekEnd.setUTCDate(weekEnd.getUTCDate() + 7);

    return { weekStart, weekEnd };
  }
}
