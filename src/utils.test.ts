import {
    createNumberArray,
    calcPosition,
    checkDates,
} from "./utils";

describe("createNumberArray", () => {
    it("should create an array of numbers", () => {
        const result = createNumberArray(5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});

describe("calcPosition", () => {
    it("should calculate the position based on session date", () => {
        const sessionDate = new Date("2023-10-23T09:15:00.000Z");
        const result = calcPosition(sessionDate);

        const expectedPosition = 309.5;
        expect(result).toBe(expectedPosition);
    });
});

describe("checkDates", () => {
    it("should check if two dates are equal", () => {
        const firstDate = new Date("2023-10-16T09:15:53.000Z");
        const secondDate = new Date("2023-10-16T09:15:53.000Z");
        const result = checkDates(firstDate, secondDate);
        expect(result).toBe(true);
    });
});