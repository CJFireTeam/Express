import String from "../../shared/valueObjects/String";
import Date from "../../shared/valueObjects/Date";

export default class Agenda {
  private _title: String;
  private _description: String;
  private _startDate: Date;
  private _endDate: Date;
  private _location: String;

  private _owner: String;
  constructor(
    { title, description, owner, startDate, endDate, location }: {
      title?: string,
      description?: string,
      owner?: string,
      startDate?: string,
      endDate?: string,
      location?: string,
    }) {
    this._title = new String(title, true);
    this._description = new String(description, true);

    // Validación de startDate
    if (!startDate) throw new Error("startDate es requerido");
    this._startDate = new Date(startDate); 

    // Validación de endDate
    if (endDate) {
      this._endDate = new Date(endDate); 
    } else {
      this._endDate = new Date(startDate); 
    }
    this._location = new String(location, true);
    this._owner = new String(owner, true);
  }

  // Getters
  public get title(): String {
    return this._title;
  }

  public get description(): String {
    return this._description;
  }

  public get startDate(): Date {
    return this._startDate;
  }

  public get endDate(): Date {
    return this._endDate;
  }

  public get location(): String {
    return this._location;
  }
  public get owner(): string {
    return this._owner.value;
  }


  // Setters
  public set setTitle(value: string) {
    this._title = new String(value);
  }

  public set setDescription(value: string) {
    this._description = new String(value);
  }

  public set setStartDate(value: string) {
    this._startDate = new Date(value);
  }

  public set setEndDate(value: string) {
    this._endDate = new Date(value); 
  }

  public set setLocation(value: string) {
    this._location = new String(value);
  }
  // public set setOwner(value: string) {
  //   this._owner = new String(value);
  // }
  public json() {
    return {
      title: this.title.value,
      description: this.description.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
      location: this.location.value,
      user_id: this.owner
    };
  }
}