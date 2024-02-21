
// actividad LISTAS

class Node { //acá creo los nodos
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList { // creo la lista anidada
    constructor() { //apunto a la cabeza y a la cola
      this.head = null;
      this.tail = null;
    }
  
    append(todo) { //agregando nodos
      const newNode = new Node(todo);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        this.tail.next = newNode;
      }
  
      this.tail = newNode;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(`Tarea: ${current.value.title}`);
        console.log(`Descripción: ${current.value.description}`);
        if (current.next) {
          console.log(`Siguiente tarea: ${current.next.value.title}`);
        } else {
          console.log("No hay tareas");
        }
        console.log("////*//////");
        current = current.next;
      }
    }
  }
  
  //Actividades, las defino con constantes
  const tarea0 = {
    title: "Pensar que comer",
    description: "elegir que comer hoy",
  };
  const tarea1 = {
    title: "Conseguir comida",
    description: "Ir a la tienda",
  };
  
  const tarea2 = {
    title: "preparar comida",
    description: "picar y cocinar los ingredientes",
  };
  
  const tarea3 = {
    title: "servir la comida",
    description: "Usar un plato y servir",
  };

  const tarea4 = {
    title: "comer",
    description: "Comerme la comida",
  };
  
  // todoList se hace una lista anidada
  const todoList = new LinkedList();
  
  // Append the TODOs to the list
  todoList.append(tarea0);
  todoList.append(tarea1);
  todoList.append(tarea2);
  todoList.append(tarea3);
  todoList.append(tarea4);
  
  // Print all the TODOs
  todoList.print();
  