import Agenda from "../dominio/agenda";
import IAgenda from "../dominio/agenda.interface";

export default class AgendaApplication {
  private agendaRepository: IAgenda;

  constructor(repositorio: IAgenda) {
    this.agendaRepository = repositorio;
  }

  async create(
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    location: string
  ) {
    try {
      const createdAt = new Date().toISOString();
      const updatedAt = createdAt;
      const event = new Agenda(
        title,
        description,
        startDate,
        endDate,
        location,
        createdAt,
        updatedAt
      );
      return this.agendaRepository.Create(event);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Unknown error occurred while creating event");
    }
  }

  async findOne(title: string) {
    try {
      return this.agendaRepository.find(title);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Unknown error occurred while finding event");
    }
  }

  async findAll() {
    try {
      return this.agendaRepository.findAll();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Unknown error occurred while finding event");
    }
  }

  async update(
    originalTitle: string,
    newTitle: string,
    description: string,
    startDate: string,
    endDate: string,
    location: string
  ) {
    try {
      const event = await this.agendaRepository.find(originalTitle);
      event.setTitle = newTitle;
      event.setDescription = description;
      event.setStartDate = startDate;
      event.setEndDate = endDate;
      event.setLocation = location;
      event.setUpdatedAt = new Date().toISOString();
      return this.agendaRepository.update(event);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("Unknown error occurred while updating event");
    }
  }

  async delete(title: string) {
    try {
      return this.agendaRepository.delete(title);
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
}
