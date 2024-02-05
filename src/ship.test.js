import Ship from "./ship";

test("Construct a ship", () => {
    expect(new Ship(5).isSunk)
    .toBeFalsy();
})

test("")