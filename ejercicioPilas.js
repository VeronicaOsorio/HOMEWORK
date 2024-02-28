class Stack{
    constructor(){
        this.stack = {};
        this.count = 0;

    }

    push(element){
        this.stack[this.count ]= element;
        this.count++;
        return this.stack;

    }

    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;

    }

    peek(){
        return this.stack[this.count - 1]
    }

    size (){
        return this.count;
    }

    print (){
        console.log(this.stack);
    }
}

class Book{
    constructor(name, isbn, author, editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}
const book1 = new Book("Clockwork Angel", "978-8408098555", "Cassandra Clare", "Destino");
const book2 = new Book("Clockwork Prince", "978-8408098562", "Cassandra Clare", "Destino");
const book3 = new Book("Clockwork Princess", "978-8408098579", "Cassandra Clare", "Destino");


const stack = new Stack;

stack.push(book1);
stack.push(book2);
stack.push(book3);



