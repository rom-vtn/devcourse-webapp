import { isEven } from "./script";

describe("isEven", () => {
    it("should be even", () => {
        expect(isEven(3)).toBeTruthy();
    });
});
