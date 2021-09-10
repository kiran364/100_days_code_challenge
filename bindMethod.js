const myObject = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = myObject.getX;
  console.log("befor bind() object with function", unboundGetX()); 
  // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(myObject);
  console.log("after bind() object with function", boundGetX());
  // expected output: 42
  