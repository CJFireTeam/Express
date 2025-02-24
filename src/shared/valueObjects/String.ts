export default class String {
    public value: string
    constructor(value:string = '',required:boolean = false,length?:number){
        this.value = value;

        if (required && value.length === 0){
            throw ('string is required')
        }

        
        if (length && value.length < length){
            throw (`Valor menor a ${length} caracteres.`)
        }
    }
}