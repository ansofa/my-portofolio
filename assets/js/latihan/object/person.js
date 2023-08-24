const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
    }

    setTitle() {
        if (this.gender == "L") {
            this.name = `Tuan ${this.name}`
        } else {
            this.name = `Nyonya ${this.name}`
        }
    }

    static find(name) {
        const findNama = persons.find(item => item.name === name);
        return findNama;
    } 
}

const personLaki1 = new Person("Malih", "L");
const personPerempuan1 = new Person("Ayu", "P");

personLaki1.setTitle()
personPerempuan1.setTitle()

persons.push(personLaki1);
persons.push(personPerempuan1);

console.log(persons);

console.log(Person.find("Tuan Malih"));