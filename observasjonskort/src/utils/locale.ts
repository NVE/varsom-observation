import { getAssetPath } from '@stencil/core';
async function fetchLocaleStringsForComponent(componentName: string, locale: string): Promise<any> {
    return new Promise((resolve, reject): void => {
      fetch(`${getAssetPath(`/i18n/${componentName}.i18n.${locale}.json`)}`)
      .then((result) => {
        if (result.ok) resolve(result.json());
        else reject();
      }, () => reject());
    });
  }
  

  //source: https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117

  export async function getLocaleComponentStrings(lang: string): Promise<any> {
    console.log(lang)
    let componentName = "varsom-observation";
    
    let strings;
    try {
      strings = await fetchLocaleStringsForComponent(componentName, lang);
    } catch (e) {
      console.warn(`error getting locale for ${componentName} (${lang}) `);
      strings = await fetchLocaleStringsForComponent(componentName, lang);
    }
    return strings;
  }