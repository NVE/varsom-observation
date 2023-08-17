//import { getAssetPath } from '@stencil/core';
async function fetchLocaleStringsForComponent(componentName: string, locale: string): Promise<any> {
    return new Promise((resolve, reject): void => {
      fetch(`./../src/assets/i18n/${componentName}.i18n.${locale}.json`)
      .then((result) => {
        if (result.ok) resolve(result.json());
        else reject();
      }, () => reject());
    });
  }
  
  export function getLocaleFromDom(){
    var elements = document.querySelectorAll('html');
    for (let i = 0; i < elements.length; i++){
        if (elements[i].getAttribute('lang')){
        return elements[i].getAttribute('lang');
  }
}
}
  //source: https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117

  export async function getLocaleComponentStrings(): Promise<any> {
    
    let componentName = "varsom-observation";
    
    let strings;

    try {
      strings = await fetchLocaleStringsForComponent(componentName, getLocaleFromDom());
    } catch (e) {
      console.warn(`error getting locale for ${componentName} - ${getLocaleFromDom()}) `);
    }
    return strings;
  }