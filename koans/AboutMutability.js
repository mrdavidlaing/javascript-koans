describe("About Mutability", function() {

  it("should expect object properties to be public and mutable", function () {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";
    
    expect(aPerson.firstname).toBe(__);
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";
    
    expect(aPerson.firstname).toBe(__);
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
    expect(aPerson.getFullName()).toBe(__);
    
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };
    
    expect(aPerson.getFullName()).toBe(__);
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
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
    
    expect(aPerson.getFirstName()).toBe(__);
    expect(aPerson.getLastName()).toBe(__);
    expect(aPerson.getFullName()).toBe(__);

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };
    
    expect(aPerson.getFullName()).toBe(__);
  });

});
