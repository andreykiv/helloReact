
class Book {
    constructor(title, author){
        this.title = title
        this.author = author
    }
    getDescription(){
        return `Title ${this.title} / Author: ${this.author}`
    }
}
let myNewBook = new Book("The gambler", "Fyodor Dostoyevsky")

const unLibroCualquiera = {
    title: 'Casdasd',
    author: 'asdasd'
}

const getDesc = miLibroFavorito.getDescription.bind(unLibroCualquiera)
console.log('Llamando a la funcion indirectamente: ', getDesc())


class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    getDescription(){
        return `Mi nombre es ${this.name} y mi edad es ${this.age}`
    }
}

class Amigo extends Person{
    constructor(name, age, location){
        super(name, age)
        this.location = location
    }
    saludar(){
        return 'Hello!'
    }
}

const unAmigo = new Amigo('perico', 34, 'Reus')
console.log(unAmigo.saludar());