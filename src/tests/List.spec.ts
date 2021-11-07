import {List} from "../list/List";

describe("List", () => {
    it("test", () => {
        const list = new List();
        expect(list.test()).toBe(10);
    })
})