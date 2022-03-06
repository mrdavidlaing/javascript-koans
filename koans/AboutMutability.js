describe("About Mutability", function () {
  it("should expect object properties to be public and mutable", function () {
    var aPerson = { firstname: "John", lastname: "Smith" };
    aPerson.firstname = 2;

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person("John", "Smith");
    aPerson.firstname = 2;

    expect(aPerson.firstname).toBe(FILL_ME_IN);
  });

  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return 2;
    };

    var aPerson = new Person("John", "Smith");
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return 2;
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });

  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname) {
      var fullName = firstname || lastname;

      this.getFirstName = function () {
        return firstname;
      };
      this.getLastName = function () {
        return lastname;
      };
      this.getFullName = function () {
        return fullName;
      };
    }
    var aPerson = new Person(2, 2);

    aPerson.firstname = "Penny";
    aPerson.lastname = 2;
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);

    aPerson.getFullName = function () {
      return (aPerson.lastname + ", " + aPerson.firstname)[0];
    };

    expect(aPerson.getFullName()).toBe(FILL_ME_IN.toString());
  });
});
