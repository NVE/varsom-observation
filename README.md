# varsom-observation

# A web component for showing natural hazard observations

## **Installation**
1. Install node.js v18.13.0 or newer
2. Install Visual Studio Code
3. Clone repo (https://github.com/NVE/observasjonskort.git)
4. Open terminal and run "cd .\observasjonskort\"
5. Install jquery: "npm install @types/jquery@latest"
6. Install packages: "npm install"
7. Test locally with "npm start"

### Storybook
Storybook can be used to test and demonstrate the component and each child component, using different inputs (props).
To run storbybook, you must first build the project. Run:
1. npm run build
2. npm run storybook (you may have to run "$env:NODE_OPTIONS = "--openssl-legacy-provider") first.

The prop "count" in the main component "varsom-observation" must be set to 1 if a regId is set.

### Chromatic
Stobybook can be published to Chromatic. Sign up for Chromatic (https://www.chromatic.com/start?startWithSignup=true) and create a project. 
Replace secret token under scripts in package.json with your project token from Chromatic. Project token should be kept in a safe place, e.g. Github Secrets. 
When project token is set, run:
1. npm run build-storybook
2. npm chromatic

## **Testing** ##
We use Ponicode for testing based on AI. To use Ponicode, you must include 
"import fetch from "node-fetch";" in utils.ts. The import is commented out as default, bacause the project will not build with node-fetch imported. To test methods with Ponicode, press "Ponicode: Unit test" over the method signature. Then you can test the method with input and expected output. The test is then auto generated by Ponicode. Ponicode can also suggest tests with input and expected output for simple methods.

## **Distribute component to npm**
not implemented

## **Import component from npm**
not implemented

## **Import component in a Vue project**
not implemented

## **Import component in a React project**
not implemented

