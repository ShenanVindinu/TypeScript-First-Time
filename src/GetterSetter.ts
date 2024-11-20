class Customer {
    private cId: number;
    cName: string;
    cAddress: string;

    constructor(cId: number, cName: string, cAddress: string) {
        this.cId = cId;
        this.cName = cName;
        this.cAddress = cAddress;
    }

    print(): void {
        console.log(this.cName, ":", this.cAddress);
    }

}

const customer1 = new Customer(1,"Shenan","Panadura");
customer1.print();