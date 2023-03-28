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
      }, 
      {
        src: "**/*icon.svg",
        dest: "icons"
      }, 
      {
        src: "**/*.png",
        dest: "pictures"
      },
      {
        src: "**/*.jpg",
        dest: "pictures"
      },
      {
        src: "**/ext/*.svg",
        dest: "svg"
      }
    ],
      
      serviceWorker: null, // disable service workers
    }
    
  ],
 
};
