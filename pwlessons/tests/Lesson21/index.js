class Singleton {
    static instance;
  
    constructor() {
      if (Singleton.instance) {
        return Singleton.instance;
      }
  
      Singleton.instance = this;
    }
  
    someMethod() {
      console.log('Doing something...');
    }
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2);  // must return: true
  
  instance1.someMethod();  // must returnе: Doing something...
  