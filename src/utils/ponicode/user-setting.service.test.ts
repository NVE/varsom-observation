import * as user_setting_service from "../user-setting.service"
// @ponicode
describe("user_setting_service.UserSettingService.init", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_setting_service.UserSettingService()
    })

    test("0", () => {
        inst.init()
    })
})

// @ponicode
describe("user_setting_service.UserSettingService.createSaveToDbOnChangeListener", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_setting_service.UserSettingService()
    })

    test("0", () => {
        inst.createSaveToDbOnChangeListener()
    })
})

// @ponicode
describe("user_setting_service.UserSettingService.setDaysBackForCurrentGeoHazard", () => {
    let inst: any

    beforeEach(() => {
        inst = new user_setting_service.UserSettingService()
    })

    test("0", () => {
        inst.setDaysBackForCurrentGeoHazard(undefined, undefined)
    })
})
