import Agenda from "./agenda";

export default interface IAgenda {
    Create(event: Agenda): Promise<Agenda>;
    find(title: string): Promise<Agenda>;
    findAll(): Promise<Agenda[]>;
    update(event: Agenda): Promise<Agenda>;
    delete(title: string): Promise<Boolean>;
}