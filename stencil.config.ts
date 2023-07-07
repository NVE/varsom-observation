import { Config } from '@stencil/core';

export const config: Config = {
  
  namespace: 'observation-components',
  globalStyle: 'src/global/global.css',
  
  outputTargets: [
    {
      type: 'dist',
      copy: [{
        src: "**/*.i18n.*.json",
        dest: "src/assets/i18n"
      }, 
      {
        src: "**/*icon.svg",
        dest: "src/assets/icons"
      }, 
      {
        src: "**/*.png",
        dest: "src/assets/pictures"
      },
      {
        src: "**/*.jpg",
        dest: "src/assets/pictures"
      },
      {
        src: "**/ext/*.svg",
        dest: "src/assets/svg/ext"
      },
      {
        src: "**/avalanche/*.svg",
        dest: "src/assets/svg/avalanche"
      },
      {
        src: "**/*.ttf",
        dest: "src/assets/fonts"
      }
    ],
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
        dest: "src/assets/i18n"
      }, 
      {
        src: "**/*icon.svg",
        dest: "src/assets/icons"
      }, 
      {
        src: "**/*.png",
        dest: "src/assets/pictures"
      },
      {
        src: "**/*.jpg",
        dest: "src/assets/pictures"
      },
      {
        src: "**/ext/*.svg",
        dest: "src/assets/svg/ext"
      },
      {
        src: "**/avalanche/*.svg",
        dest: "src/assets/svg/avalanche"
      },
      {
        src: "**/*.ttf",
        dest: "src/assets/fonts"
      }
    ],
      
      serviceWorker: null, // disable service workers
    }
    
  ],
 
};
