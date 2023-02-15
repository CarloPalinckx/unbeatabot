namespace Cache {
  export class InMemory {
    getSome() {
      return "some";
    }
  }
}

basic.forever(function () {
  console.log(new Cache.InMemory());
  basic.showLeds(`
	. . . . .
	. . . . .
	. . # . .
	. . . . .
	. . . . .
	`);
});
