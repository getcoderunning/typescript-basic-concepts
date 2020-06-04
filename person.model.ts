export class Person {
    firstName: string;
    middleName: string;
    lastName: string;

    constructor(data?: any) {
        this.firstName = data.firstName || "Christian";
        this.lastName = data.lastName || "Bailon";
        this.middleName = data.middleName;
    }
}