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

* 
