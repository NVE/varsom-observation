export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'README',
};

const Template = args => `<varsom-doc
text=${args.Text}

>
</varsom-doc> `;

export const VarsomDoc = Template.bind({});
VarsomDoc.args = {
  Text: "'Velkommen til Storybook for Varsom Observasjonskort. Storybook viser komponentene i margen til venstre. Hovedkomponenten heter Varsom Observation. Man kan endre på input til komponentene til høyre (controls). Varsom Observation vises best i fullskjerm. Trykk på fullskjem-ikonet på toppen. Hvis regid er lagt inn, må count være 1. Det er mulig å velge blank på type, slik at alle faretyper vises. De andre komponentene er lagt inn med eksempeldata fra API og mangler oversettelse. Kart og enkelte diagrammer er hardkodet i storybook.'",
};
