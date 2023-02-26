import * as utils from "../utils"



// @ponicode
describe("utils.getGeoHazardIdFromName", () => {
    test("0", () => {
        utils.getGeoHazardIdFromName("Snow")
    })

    test("1", () => {
        utils.getGeoHazardIdFromName("Water")
    })

    test("2", () => {
        utils.getGeoHazardIdFromName("Ice")
    })

    test("3", () => {
        utils.getGeoHazardIdFromName("Dirt")
    })

    test("4", () => {
        utils.getGeoHazardIdFromName("Credit Card Account")
    })

    test("5", () => {
        utils.getGeoHazardIdFromName("Investment Account")
    })

    test("6", () => {
        utils.getGeoHazardIdFromName("")
    })
})



// @ponicode
describe("utils.getLangKeyFromName", () => {
    test("0", () => {
        utils.getLangKeyFromName("Norwegian")
    })

    test("1", () => {
        utils.getLangKeyFromName("Nynorsk")
    })

    test("2", () => {
        utils.getLangKeyFromName("Italian")
    })

    test("3", () => {
        utils.getLangKeyFromName("Slovenian")
    })

    test("4", () => {
        utils.getLangKeyFromName("Swedish")
    })

    test("5", () => {
        utils.getLangKeyFromName("German")
    })

    test("6", () => {
        utils.getLangKeyFromName("cn")
    })

    test("7", () => {
        utils.getLangKeyFromName("de")
    })

    test("8", () => {
        utils.getLangKeyFromName("")
    })
})

// @ponicode
describe("utils.getDataFromApi", () => {
    test("0", async () => {
        await utils.getDataFromApi("object", 0, "it", "a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("1", async () => {
        await utils.getDataFromApi("string", 1, "en", "a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("2", async () => {
        await utils.getDataFromApi("number", 100, "cn", "7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("3", async () => {
        await utils.getDataFromApi("object", 0, "en", "a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("4", async () => {
        await utils.getDataFromApi("object", -100, "de", "a85a8e6b-348b-4011-a1ec-1e78e9620782")
    })

    test("5", async () => {
        await utils.getDataFromApi("", -Infinity, "", "")
    })
})
