export default class String {
    public value: string
    constructor(value:string) {
        this.value = value;
        if (!value) {
            throw new Error('string is required')
        }
        if (value.length <5){
            throw new Error('Valor menor a 5 caracteres.')
        }
    }
}