Notes JS Course
===============

* To check browser compatibility: https://caniuse.com/

* Loosely typed:
    var firstResult = "35" - 3; // subtraction is applied, resulting in 32

* Strict equality operator also checks for equal types:

    ```javascript
    aString = '3';
    aString3 === 3; //returns false
    ```

* For in (Enumerable Properties) VS For of (Iterable Collections):

    ```javascript
    var programLanguages = new Array('C++','Pascal','FORTRAN','BASIC','C#','Java','Perl','JavaScript');
    for (var item in programLanguages) {} // 1 2 3 4 ...
    for (var item of programLanguages) {} // 'C++','Pascal', ...
    ```

* In strict mode is "this" by default undefined i.s.o. window!

* Let's summarize the rules, in order of precedence, for determining this from a function call's call-site
  * Is the function called with new binding?
    * var bar = new foo()
  * Is the function called with explicit or hard binding?
    * var bar = foo.call(obj)
  * Is the function called with implicit object binding?
    * var bar = obj.foo()
  * Otherwise, use default binding...
    * var bar = foo()

* Class with multiple methods from different classes:

    ```javascript
    let Bridge = Base => class extends Base {
      evasiveManouvres() { console.log("It's a trap! Begin evasive manouvres!"); }
    };

    let LasersCanons = Base => class extends Base {
      fireLasers() { console.log("Concentrate all fire on that Super Star Destroyer!"); }
    };

    let FighterBays = Base => class extends Base {
      launchFighters() { console.log('Launch the X-Wings!'); }
    };

    class Starship {
      constructor(captain) { this.captain = captain; }
    }

    class MonCalamariCruiser extends Bridge(LasersCanons(FighterBays(Starship))) {
      constructor(captain) { super(captain); this.side = 'rebels'; }
    }

    let c = new MonCalamariCruiser('Admiral Ackbar');
    console.log(c.captain, c.side);
    c.evasiveManouvres();
    c.fireLasers();
    c.launchFighters();
    ```
