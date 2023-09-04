import * as utils from '../utils';

// @ponicode
describe('utils.getGeoHazardIdFromName', () => {
  test('input snow returns snow geoHazardId', () => {
    let result: any = utils.getGeoHazardIdFromName('Snow');
    expect(result).toBe(10);
  });

  test('input water returns water geoHazardId', () => {
    let result: any = utils.getGeoHazardIdFromName('Water');
    expect(result).toBe(60);
  });

  test('input ice returns ice geoHazardId', () => {
    let result: any = utils.getGeoHazardIdFromName('Ice');
    expect(result).toBe(70);
  });

  test('input dir returns dirt geoHazardId', () => {
    let result: any = utils.getGeoHazardIdFromName('Dirt');
    expect(result).toBe(20);
  });
});

// @ponicode
describe('utils.getLangKeyFromName', () => {
  test('input norwegian returns norwegian langKey', () => {
    let result: any = utils.getLangKeyFromName('nb');
    expect(result).toBe(1);
  });

  test('input nynorsk returns nynorsk langKey', () => {
    let result: any = utils.getLangKeyFromName('nn');
    expect(result).toBe(7);
  });

  test('input italian returns italian langKey', () => {
    let result: any = utils.getLangKeyFromName('it');
    expect(result).toBe(6);
  });

  test('input slovenian returns slovenian langKey', () => {
    let result: any = utils.getLangKeyFromName('sl');
    expect(result).toBe(4);
  });

  test('input swedish returns swedish langKey', () => {
    let result: any = utils.getLangKeyFromName('sv');
    expect(result).toBe(5);
  });

  test('input german returns german langKey', () => {
    let result: any = utils.getLangKeyFromName('de');
    expect(result).toBe(3);
  });

  test('input english returns english langKey', () => {
    let result: any = utils.getLangKeyFromName('en');
    expect(result).toBe(2);
  });

  test('7', () => {
    let result: any = utils.getLangKeyFromName('fr');
    expect(result).toBe(8);
  });

  test('8', () => {
    let result: any = utils.getLangKeyFromName('da');
    expect(result).toBe(9);
  });
});

// @ponicode
describe('utils.getObservationFromApiByLanguageAndType', () => {
  test('input snow and german gets observation with snow and german from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Snow', 'de');
    expect(result).toBe('Schnee');
  });

  test('input dirt and english gets observation with dirt and english from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Dirt', 'en');
    expect(result).toBe('Soil');
  });

  test('input water and english gets observation with water and english from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Water', 'en');
    expect(result).toBe('Water');
  });

  test('input ice and german gets observation with ice and german from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Ice', 'de');
    expect(result).toBe('Eis');
  });

  test('input dirt and slovenian gets observation with dirt and slovenian from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Dirt', 'sl');
    expect(result).toBe('Zemlja');
  });

  test('input ice and swedish gets observation with ice and swedish from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Ice', 'sv');
    expect(result).toBe('Is');
  });

  test('input snow and nynorsk gets observation with snow and nynorsk from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Snow', 'nn');
    expect(result).toBe('Snø');
  });

  test('input snow and italian gets observation with snow and italian from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Snow', 'it');
    expect(result).toBe('Neve');
  });

  test('input snow and no input for language gets snow observation default language (norwegian) from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Snow', undefined);
    expect(result).toBe('Snø');
  });

  test('input snow and norwegian gets observation with snow and norwegian from API', async () => {
    let result: any = await utils.getObservationFromApiByLanguageAndType('Snow', 'nb');
    expect(result).toBe('Snø');
  });
});

// @ponicode
describe('utils.getObservationFromApiById', () => {
  test('input regId returns observation with correct regId from API', async () => {
    let result: any = await utils.getObservationFromApiById('332395');
    expect(result).toBe(332395);
  });
});

// @ponicode
describe('utils.getObservationsFromApiByTypeAmountAndLanguage', () => {
  test('get multiple observations with correct type and language (snow/english)', async () => {
    let result: any = await utils.getObservationsFromApiByTypeAmountAndLanguage('Snow', 2, 'en');
    expect(result).toBe('Snow');
  });

  test('get multiple observations with correct type and language (ice/german)', async () => {
    let result: any = await utils.getObservationsFromApiByTypeAmountAndLanguage('Ice', 2, 'de');
    expect(result).toBe('Eis');
  });
});

// @ponicode
describe('utils.valueIsNotGiven', () => {
  test('0', () => {
    let result: any = utils.valueIsNotGiven('Ikke gitt');
    expect(result).toBe(true);
  });

  test('1', () => {
    let result: any = utils.valueIsNotGiven('Mye snø');
    expect(result).toBe(false);
  });

  test('2', () => {
    let result: any = utils.valueIsNotGiven('Not given');
    expect(result).toBe(true);
  });

  test('3', () => {
    let result: any = utils.valueIsNotGiven('Keine Angabe');
    expect(result).toBe(true);
  });

  test('4', () => {
    let result: any = utils.valueIsNotGiven('Nicht angegeben');
    expect(result).toBe(true);
  });

  test('5', () => {
    let result: any = utils.valueIsNotGiven('Ni podano');
    expect(result).toBe(true);
  });

  test('6', () => {
    let result: any = utils.valueIsNotGiven('Ej angivet');
    expect(result).toBe(true);
  });

  test('7', () => {
    let result: any = utils.valueIsNotGiven('Ikkje gitt');
    expect(result).toBe(true);
  });

  test('8', () => {
    let result: any = utils.valueIsNotGiven('Non donné');
    expect(result).toBe(true);
  });

  test('9', () => {
    let result: any = utils.valueIsNotGiven('Ikke givet');
    expect(result).toBe(true);
  });
});

// @ponicode
describe('utils.getIconName', () => {
  test('0', () => {
    let result: any = utils.getIconName('Snow');
    expect(result).toBe('snow');
  });

  test('1', () => {
    let result: any = utils.getIconName('Ice');
    expect(result).toBe('ice');
  });

  test('2', () => {
    let result: any = utils.getIconName('Water');
    expect(result).toBe('water');
  });

  test('3', () => {
    let result: any = utils.getIconName('Soil');
    expect(result).toBe('dirt');
  });

  test('4', () => {
    let result: any = utils.getIconName('Other');
    expect(result).toBe('');
  });
});

// @ponicode
describe('utils.getDangerTypeSvg', () => {
  test('0', () => {
    let result: any = utils.getDangerTypeSvg(1);
    expect(result).toBe('Dry-Snow-1-EAWS.svg');
  });

  test('1', () => {
    let result: any = utils.getDangerTypeSvg(2);
    expect(result).toBe('Dry-Snow-2-EAWS.svg');
  });

  test('2', () => {
    let result: any = utils.getDangerTypeSvg(3);
    expect(result).toBe('Dry-Snow-3-EAWS.svg');
  });

  test('3', () => {
    let result: any = utils.getDangerTypeSvg(4);
    expect(result).toBe('Dry-Snow-4-5-EAWS.svg');
  });

  test('4', () => {
    let result: any = utils.getDangerTypeSvg(99);
    expect(result).toBe('No-Rating-EAWS.svg');
  });
});

// @ponicode
describe('utils.format', () => {
  test('0', () => {
    let result: any = utils.format('First', 'Middle', 'Last');
    expect(result).toBe('First Middle Last');
  });
});

// @ponicode
describe('utils.generatePlotForIceThickness', () => {
  test('0', () => {
    utils.generatePlotForIceThickness(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);
  });
});
