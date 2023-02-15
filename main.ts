/**
 * NameSpaces
 */
namespace Cache {
    export class InMemory {}
}

namespace Positioning {
    export class Position {
        public x: number = 0;
        public y: number = 0;

        public move(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }
}

const position = new Positioning.Position();

basic.forever(function () {
    basic.showString(`${position.x},${position.y}`);
});
