// a singleton pattern in the scope of DB connection
// there we illustrate the example why we can create DB connectin once
// and prevent new unnecessary connections

function DatabseConnection () {

  let databaseInstance = null; 

  // track number of times the instance is created 
  let count = 0; 

  function init() {
      console.log(`Opening databse #${count + 1}`);
      /**
       * perform operation 
       */
  }

  function createIntance() {
      if(databaseInstance == null) {
          databaseInstance = init();
      }
      return databaseInstance;
  }

  function closeIntance() {
      console.log('closing database');
      databaseInstance = null;
  }

  return {
      open: createIntance,
      close: closeIntance
  }
}

const database = DatabseConnection();
database.open(); //Opening databse #1
database.open(); //Opening databse #1
database.close(); //closing database