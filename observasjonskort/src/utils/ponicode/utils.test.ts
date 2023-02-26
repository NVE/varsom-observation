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
