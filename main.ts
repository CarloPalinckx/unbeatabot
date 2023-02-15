/**
 * NameSpaces
 */

namespace Positioning {
    export type Coords = [/** X */ number, /** Y */ number];

    export class Position {
        public x: number;
        public y: number;

        public constructor() {
            this.x = 0;
            this.y = 0;
        }

        public move(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public toCoords(): Coords {
            return [this.x, this.y];
        }
    }
}

namespace Area {
    export class Grid {
        private grid: Map<Positioning.Coords, boolean>;

        public constructor() {
            this.grid = new Map();
        }

        public addPoint(coords: Positioning.Coords, isAvailable: boolean) {
            this.grid.set(coords, isAvailable);
        }
    }
}

const grid = new Area.Grid();
const position = new Positioning.Position();

basic.forever(function () {
    basic.showString(`${position.x},${position.y}`);
});
