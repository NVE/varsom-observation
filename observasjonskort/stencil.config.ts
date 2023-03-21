import { Config } from '@stencil/core';

export const config: Config = {
  
  namespace: 'observasjonskort',
  
  
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [{
        src: "**/*.i18n.*.json",
        dest: "i18n"
      }],
      
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      copy: [{
        src: "**/*icon.svg",
        dest: "icons"
      }],
      
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      copy: [{
        src: "**/*.png",
        dest: "pictures"
      }],
      
      serviceWorker: null, // disable service workers
    },
    {
      type: 'www',
      copy: [{
        src: "**/*.jpg",
        dest: "pictures"
      }],
      
      serviceWorker: null, // disable service workers
    },
  ],
 
};
