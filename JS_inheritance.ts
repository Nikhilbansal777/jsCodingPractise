class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} steps`);
    }
}

class GS extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    raa() {
        console.log(`${this.name} ek ${this.breed} name`);
    }
}

const cds = new GS("asdf", "fasd");
cds.raa()