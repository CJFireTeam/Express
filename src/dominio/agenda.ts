import String from "../shared/valueObjects/String";
import Date from "../shared/valueObjects/Date";

export default class Agenda {
  private _title: String;
  private _description: String;
  private _startDate: Date;
  private _endDate: Date;
  private _location: String;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    title: string,
    description: string,
    startDate: string,
    endDate: string,
    location: string,
    createdAt: string,
    updatedAt: string
  ) {
    this._title = new String(title);
    this._description = new String(description);
    this._startDate = new Date(startDate);
    this._endDate = new Date(endDate);
    this._location = new String(location);
    this._createdAt = new Date(createdAt);
    this._updatedAt = new Date(updatedAt);
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

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
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

  public set setCreatedAt(value: string) {
    this._createdAt = new Date(value);
  }

  public set setUpdatedAt(value: string) {
    this._updatedAt = new Date(value);
  }

  public Json() {
    return {
      title: this.title.value,
      description: this.description.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
      location: this.location.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value
    };
  }
}