describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";
    
    expect(__).toBe(aPerson.firstname);
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";
    
    expect(__).toBe(aPerson.firstname);
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };
    
    var aPerson = new Person ("John", "Smith");
    expect(__).toBe(aPerson.getFullName());
    
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };
    
    expect(__).toBe(aPerson.getFullName());
  });

  it("should know that variables inside constructor and constructor args are private", function () {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;
      
      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";
    
    expect(__).toBe(aPerson.getFirstName());
    expect(__).toBe(aPerson.getLastName());
    expect(__).toBe(aPerson.getFullName());

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };
    
    expect(__).toBe(aPerson.getFullName());
  });

});
