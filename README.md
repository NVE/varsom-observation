
# varsom-observation

# A web component for showing natural hazard observations

## **Installation**
1. Install node.js v18.13.0 or newer
2. Install Visual Studio Code
3. Clone repo (https://github.com/NVE/varsom-observation.git)
4. Open terminal and run "cd varsom-observation"
5. Install jquery: "npm install @types/jquery@latest"
6. Install packages: "npm install"
7. Test locally with "npm start"
<br>

### **Initialize the component**
The component has to be initialized in the index.html-file. Initialize the component with desired props inside the body-tag.
Here is an example: <br>
\<varsom-observation type="Ice" regid="" count=5  language="en"\>\</varsom-observation\> <br><br>
To show plots for ice thickness you must include these scripts and stylesheet:<br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/plott-en-istykkelse-www-regobs-no.js"\>\</script\><br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/jquery-1.11.1.min.js"\>\</script\><br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/jquery.jqplot.min.js"\>\</script\><br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/jqplot.canvasOverlay.min.js"\>\</script\><br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/jqplot.canvasTextRenderer.min.js"\>\</script\><br>
\<script type="text/javascript" src="https://plot.regobs.no/v1/js/jqplot.canvasAxisLabelRenderer.min.js"\>\</script\><br>
\<link rel="stylesheet" type="text/css" href="https://plot.regobs.no/v1/css/jquery.jqplot.min.css" /\>

<br><br>

## **Storybook**
Storybook can be used to test and demonstrate the component and each child component, using different inputs (props).
To run storbybook, you must first build the project. Run:
1. npm run build
2. npm run storybook (you may have to run "$env:NODE_OPTIONS = "--openssl-legacy-provider") first.

The main component is "varsom-observation". Props you can test the component with is type, version, count, language and regid (id for the observation). For short version 
of the component, set the version prop to "short".

The prop "count" in the main component must be set to 1 if a regid is set.

To show multiple observations without a spesific hazard type, set type to blank.

The child components have some example data from the regobs-api. The child components do not have language prop.


<br>

### **Chromatic**
Stobybook can be published to Chromatic. Sign up for Chromatic (https://www.chromatic.com/start?startWithSignup=true) and create a project. 
Replace secret token under scripts in package.json with your project token from Chromatic. 
When project token is set, run:
1. npm run build-storybook
2. npm chromatic

You can share you storybook with others. Make sure the project is set to public if you want to share it with people outside your organization. To get a link to share you stories, use Permalink which you can find under Manage - Collaborate.

<br>

## **Testing** ##
We use Ponicode for testing based on AI. To use Ponicode, you must include 
"import fetch from "node-fetch";" in utils.ts. The import is commented out as default, bacause the project will not build with node-fetch imported. To test methods with Ponicode, press "Ponicode: Unit test" over the method signature. Then you can test the method with input and expected output. The test is then auto generated by Ponicode. Ponicode can also suggest tests with input and expected output for simple methods.
<br>

## **Distribute component to npm**
The component can be published to npm with the command "npm publish --access=public". You need to have an account on npm and will 
be asked to log in after entering the command. Change version number in package.json before publishing a new version.


## **Import component in a Vue project**
To import the component in a Vue project, run the command "npm i @varsom/observation-components".<br>
copy folders from node_modules/@varsom/observation-components/dist/collection/src/assets to src/assets. <br>
In main.ts: import { defineCustomElement } from '@varsom/observation-components/dist/components/varsom-observation' and type defineCustomElement(); <br>
Use the component in a .vue-file: \<varsom-observation version="" type="Snow" regid="" count=8 language="en"\>\</varsom-observation\> <br>
You may need to adjust the width for the component in a css file, e.g. width: 200%.

<br>

You can also import the component with unpkg. Include this script in index.html:
\<script type="module" src="https://unpkg.com/@varsom/observation-components@latest/dist/observation-components/observation-components.esm.js"\>\</script\>. This way you will always get the latest version. You still need to copy the files to src/assets.

## **References**
1. Code for map component is based on code from https://beta.regobs.no
2. Code for image slider component is based on code from https://www.w3schools.com/howto/howto_js_slideshow.asp
3. Implementation of Storybook is based on code from https://ionic.io/blog/how-to-use-storybook-with-stencil
4. To check if array is empty we have used code from https://pipinghot.dev/snippet/check-if-an-array-has-length-in-javascript-typescript/
5. Code for using translation files is based on code from https://medium.com/stencil-tricks/implementing-internationalisation-i18n-with-stencil-5e6559554117




