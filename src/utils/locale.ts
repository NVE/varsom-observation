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
  
  export function getLocaleFromDom(elem: HTMLElement){
    var langElement = elem.closest("[lang]");
    if (langElement){
      return langElement.getAttribute("lang");
    } 
    else{
      return "en";
    }
  
  }

  //source: https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117

  export async function getLocaleComponentStrings(elem: HTMLElement): Promise<any> {
    
    let componentName = "varsom-observation";
    
    let strings;

    try {
      strings = await fetchLocaleStringsForComponent(componentName, getLocaleFromDom(elem));
    } catch (e) {
      console.warn(`error getting locale for ${componentName} - ${getLocaleFromDom(elem)}) `);
    }
    return strings;
  }