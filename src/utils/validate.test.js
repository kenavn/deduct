import validate from "./validate";

it('fails with non-identical data', () => {
    expect(validate([0,1,2,3], [[0,1,2,3]], [1,0,2,3])).toEqual(false);
});

it('succeeds with passthrough transformation', () => {
    expect(validate([0,1,2,3], [[0,1,2,3]], [0,1,2,3])).toEqual(true);
});

it('succeeds with transformation', () => {
    expect(validate([3,2,1,0], [[0,3,2,1]], [3,0,1,2])).toEqual(true);
});

it('succeeds with identical data and without transformation', () => {
    expect(validate([3,2,1,0], [], [3,2,1,0])).toEqual(true);
});

it('fails with non-identical data and without transformation', () => {
    expect(validate([3,2,1,0], [], [3,2,0,1])).toEqual(false);
});