export const a = "a";

basic.forever(function () {
  console.log(a);
  basic.showLeds(`
	. . . . .
	. . . . .
	. . # . .
	. . . . .
	. . . . .
	`);
});
