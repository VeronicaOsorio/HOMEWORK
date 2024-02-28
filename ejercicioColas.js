class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    return this.queue;
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    return this.queue;
  }
}


class Cajero{
  constructor(nombre, hora){
      this.nombre = nombre;
      this.hora = hora;
     
  }
}
const Cajero1 = new Cajero("VERÓNICA", "11:09");
const Cajero2 = new Cajero("LUISA", "11:12");
const Cajero3 = new Cajero("CLAUDIA", "14:14");

const queue = new Queue;

queue.enqueue(Cajero1);
queue.enqueue(Cajero2);
queue.enqueue(Cajero3);

console.log(queue);
queue.print();
