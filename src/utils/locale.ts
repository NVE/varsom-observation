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
        var langValue = langElement.getAttribute("lang");
        
        return langValue
    
    //var elements = document.querySelectorAll('html');
    //for (let i = 0; i < elements.length; i++){
      //var lang = "en";
      //if (elements[i].getAttribute('lang')){
        //lang = elements[i].getAttribute('lang');
      //return lang;
  }


//get lang attr from dom
//source: https://stackoverflow.com/questions/1043339/javascript-for-detecting-browser-language-preference
export function getBrowserLang() {
  if (navigator.languages !== undefined)

    return navigator.languages[0];
}






  //source: https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117

  export async function getLocaleComponentStrings(lang: string): Promise<any> {
    
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