class GetNextId {

  static id(array) {
   
    var nextId =
      array.sort((a, b) => {
        return a.id - b.id;
      })[array.length - 1].id + 1;
    
      return nextId;
  }
}

export default GetNextId