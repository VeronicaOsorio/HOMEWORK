
// actividad LISTAS

class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(todo) {
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
  
  //Actividades
  const todo0 = {
    title: "Pensar que comer",
    description: "elegir que comer hoy",
  };
  const todo1 = {
    title: "Conseguir comida",
    description: "Ir a la tienda",
  };
  
  const todo2 = {
    title: "preparar comida",
    description: "picar y cocinar los ingredientes",
  };
  
  const todo3 = {
    title: "servir la comida",
    description: "Usar un plato y servir",
  };

  const todo4 = {
    title: "comer",
    description: "Comerme la comida",
  };
  
  // Create a new linked list
  const todoList = new LinkedList();
  
  // Append the TODOs to the list
  todoList.append(todo0);
  todoList.append(todo1);
  todoList.append(todo2);
  todoList.append(todo3);
  todoList.append(todo4);
  
  // Print all the TODOs
  todoList.print();
  