var a = prompt("Diguem una frase");
var b = a.match(/[aeiou]/gi).length;

alert("En aquesta frase hi han " + b + " vocals");
