function Set() {
	var elements = [];
	return {
		insert: function (el) {
			if(elements.indexOf(el) == -1 ) {
				elements.push(el);
			}
		},
		getData: function () {
			return elements;
		},
		describe: function () {
			var str = ""
			for(var i = 0; i < elements.length; i++) {
				str += elements[i] + " ";
			}
			console.log("{ "+str+" }");
		},
		min : function () {
			return Math.min.apply(null,elements);
		},
		max : function () {
		    return	Math.max.apply(null,elements);
		},
		member: function (x) {
			return elements.indexOf(x);
		},
		union: function (x) {
			var temp = new Set();
			count = x.getData().length;

			for(var i = 0; i < count; i++) {
				if(elements.indexOf(x.getData()[i])  == -1 ) temp.insert(x.getData()[i]);
			}
			for(var i = 0; i < elements.length; i++) {
				temp.insert(elements[i]);
			}
			return temp;
		},
		intersection: function (x) {
			var temp = new Set();
			for(var i = 0; i < elements.length; i++) {
				if(x.member(elements[i]) != -1 ) temp.insert(elements[i]);
			}
			return temp;
		},
		difference: function (x) {
			var temp = new Set();
			for(var i = 0; i < elements.length; i++) {
				if(x.member(elements[i]) == -1 ) temp.insert(elements[i]);
			}
			return temp;
		}

	}
}

var a = new Set();
a.insert(1);
a.insert(2);
a.insert(3);
a.insert(4);
a.describe();
/*
console.log(a.max());
console.log(a.min());
console.log(a.member(6));
console.log(a.member(-50));
*/
b = new Set();
b.insert(5);
b.insert(6);
b.insert(7);
b.insert(8);
b.insert(9);
b.insert(1);
b.insert(10);
console.log(b.describe());
var c = a.union(b);
console.log(c.describe());
var z = a.intersection(b);
console.log(z.describe());

var gg =  a.difference(b);
console.log(gg.describe());


