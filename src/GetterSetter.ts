class Customer {
    private cId: number;
    cName: string;
    cAddress: string;

    constructor(cId: number, cName: string, cAddress: string) {
        this.cId = cId;
        this.cName = cName;
        this.cAddress = cAddress;
    }

    setCId(cId : number) {
        this.cId = cId;
    }

    getCId():number {
        return this.cId;
    }

    setCName(cName: string) {
        this.cName = cName;
    }

    getCName(): string {
        return this.cName;
    }

    setCAddress(cAddress: string) {
        this.cAddress = cAddress;
    }

    getCAddress(): string {
        return this.cAddress
    }

    print(): void {
        console.log(this.cName, ":", this.cAddress);
    }

}

const customer1 = new Customer(1,"Shenan","Panadura");
customer1.print();

console.log(customer1.getCId());
console.log(customer1.getCName());
console.log(customer1.getCAddress());

customer1.setCId(1);
customer1.setCName("Shenan Vindinu");
customer1.setCAddress("USA");

console.log("\n");

console.log(customer1.getCId());
console.log(customer1.getCName());
console.log(customer1.getCAddress());
