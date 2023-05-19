import * as utils from "../utils"







// @ponicode
describe("utils.getGeoHazardIdFromName", () => {
    test("input snow returns snow geoHazardId", () => {
        let result: any = utils.getGeoHazardIdFromName("Snow")
        expect(result).toBe(10)
    })

    test("input water returns water geoHazardId", () => {
        let result: any = utils.getGeoHazardIdFromName("Water")
        expect(result).toBe(60)
    })

    test("input ice returns ice geoHazardId", () => {
        let result: any = utils.getGeoHazardIdFromName("Ice")
        expect(result).toBe(70)
    })

    test("input dir returns dirt geoHazardId", () => {
        let result: any = utils.getGeoHazardIdFromName("Dirt")
        expect(result).toBe(20)
    })
})







// @ponicode
describe("utils.getLangKeyFromName", () => {
    test("input norwegian returns norwegian langKey", () => {
        let result: any = utils.getLangKeyFromName("Norwegian")
        expect(result).toBe(1)
    })

    test("input nynorsk returns nynorsk langKey", () => {
        let result: any = utils.getLangKeyFromName("Nynorsk")
        expect(result).toBe(7)
    })

    test("input italian returns italian langKey", () => {
        let result: any = utils.getLangKeyFromName("Italian")
        expect(result).toBe(6)
    })

    test("input slovenian returns slovenian langKey", () => {
        let result: any = utils.getLangKeyFromName("Slovenian")
        expect(result).toBe(4)
    })

    test("input swedish returns swedish langKey", () => {
        let result: any = utils.getLangKeyFromName("Swedish")
        expect(result).toBe(5)
    })

    test("input german returns german langKey", () => {
        let result: any = utils.getLangKeyFromName("German")
        expect(result).toBe(3)
    })

    test("input english returns english langKey", () => {
        let result: any = utils.getLangKeyFromName("English")
        expect(result).toBe(2)
    })
})







// @ponicode
describe("utils.getObservationFromApiByLanguageAndType", () => {
    test("input snow and german gets observation with snow and german from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Snow", "German")
        expect(result).toBe("Schnee")
    })

    test("input dirt and english gets observation with dirt and english from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Dirt", "English")
        expect(result).toBe("Soil")
    })

    test("input water and english gets observation with water and english from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Water", "English")
        expect(result).toBe("Water")
    })

    test("input ice and german gets observation with ice and german from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Ice", "German")
        expect(result).toBe("Eis")
    })

    test("input dirt and slovenian gets observation with dirt and slovenian from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Dirt", "Slovenian")
        expect(result).toBe("Zemlja")
    })

    test("input ice and swedish gets observation with ice and swedish from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Ice", "Swedish")
        expect(result).toBe("Is")
    })

    test("input snow and nynorsk gets observation with snow and nynorsk from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Snow", "Nynorsk")
        expect(result).toBe("Snø")
    })

    test("input snow and italian gets observation with snow and italian from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Snow", "Italian")
        expect(result).toBe("Nevicare")
    })

    test("input snow and no input for language gets snow observation default language (norwegian) from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Snow", undefined)
        expect(result).toBe("Snø")
    })

    test("input snow and norwegian gets observation with snow and norwegian from API", async () => {
        let result: any = await utils.getObservationFromApiByLanguageAndType("Snow", "Norwegian")
        expect(result).toBe("Snø")
    })
})



// @ponicode
describe("utils.getObservationFromApiById", () => {
    test("input regId returns observation with correct regId from API", async () => {
        let result: any = await utils.getObservationFromApiById("332395")
        expect(result).toBe(332395)
    })
})



// @ponicode
describe("utils.getObservationsFromApiByTypeAmountAndLanguage", () => {
    test("get multiple observations with correct type and language (snow/english)", async () => {
        let result: any = await utils.getObservationsFromApiByTypeAmountAndLanguage("Snow", 2, "English")
        expect(result).toBe("Snow")
    })

    test("get multiple observations with correct type and language (ice/german)", async () => {
        let result: any = await utils.getObservationsFromApiByTypeAmountAndLanguage("Ice", 2, "German")
        expect(result).toBe("Eis")
    })
})

// @ponicode
describe("utils.valueIsNotGiven", () => {
    test("0", () => {
        let result: any = utils.valueIsNotGiven("Ikke gitt")
        expect(result).toBe(true)
    })

    test("1", () => {
        let result: any = utils.valueIsNotGiven("Mye snø")
        expect(result).toBe(false)
    })

    test("2", () => {
        let result: any = utils.valueIsNotGiven("Not given")
        expect(result).toBe(true)
    })

    test("3", () => {
        let result: any = utils.valueIsNotGiven("Keine Angabe")
        expect(result).toBe(true)
    })

    test("4", () => {
        let result: any = utils.valueIsNotGiven("Nicht angegeben")
        expect(result).toBe(true)
    })

    test("5", () => {
        let result: any = utils.valueIsNotGiven("Ni podano")
        expect(result).toBe(true)
    })

    test("6", () => {
        let result: any = utils.valueIsNotGiven("Ej angivet")
        expect(result).toBe(true)
    })

    test("7", () => {
        let result: any = utils.valueIsNotGiven("Ikkje gitt")
        expect(result).toBe(true)
    })

    test("8", () => {
        let result: any = utils.valueIsNotGiven("Non donné")
        expect(result).toBe(true)
    })

    test("9", () => {
        let result: any = utils.valueIsNotGiven("Ikke givet")
        expect(result).toBe(true)
    })
})
