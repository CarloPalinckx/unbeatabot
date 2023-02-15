namespace Engine {
  export const a = "a";
}

basic.forever(function () {
  console.log(Engine.a);
  basic.showLeds(`
	. . . . .
	. . . . .
	. . # . .
	. . . . .
	. . . . .
	`);
});
