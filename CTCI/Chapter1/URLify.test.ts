import { URLify } from "./URLify"

describe("URLify", () => {
    it("replaces empty spaces with %20", () => {
        expect(URLify("Mr John Smith ", 13)).toEqual("Mr%20John%20Smith")
    })

})
