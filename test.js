load('riot.js');
Riot.require('istype.js');

Riot.context('istype.js', function() {
  given('Undefined', function() {
    var boop;
    should('identify undefined', isType(undefined, undefined)).isTrue();
    should('identify undefined', isType(boop, undefined)).isTrue();
  });

  given('A Boolean', function() {
    should('identify true', isType(true, Boolean)).isTrue();
    should('identify false', isType(false, Boolean)).isTrue();
    should('not confuse it with a string', isType('false', Boolean)).isFalse();
  });

  given('Null', function() {
    should('identify null', isType(null, null)).isTrue();
  });

  given('A String', function() {
    var s = 'Hello';
    should('identify it as a string', isType(s, String)).isTrue();
    should('not identify it is an array', isType([1, 2, 3], String)).isFalse();
  });

  given('A Number', function() {
    should('identify it as a number', isType(1, Number)).isTrue();
    should('not identify it is a strong', isType(1, String)).isFalse();
  });

  given('An Object', function() {
    should('identify it as an object', isType({}, Object)).isTrue();
  });

  given('A Function', function() {
    should('identify it as a function', isType(function(){}, Function)).isTrue();
  });

  given('A Regular Expression', function() {
    should('identify a literal', isType(/test/, RegExp)).isTrue();
    should('identify an instantiated regexp', isType(new RegExp('/test/'), RegExp)).isTrue();
  });

  given('An Array', function() {
    var a = [1, 2, 3];
    should('identify it as an Array', isType(a, Array)).isTrue();
    should('not identify it is a string', isType('test', Array)).isFalse();
  });

  given('A Date', function() {
    should('identify it as a Date', isType(new Date(), Date)).isTrue();
    should('not identify it as an Array', isType(new Date(), Array)).isFalse();
  });
});

Riot.run();
