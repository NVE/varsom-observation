export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/AvalacheEvaluation2',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-avalanche-evaluation2 
avalanche-evaluation=${args.AvalancheEvaluation}
avalanche-development=${args.AvalancheDevelopment}
Comment=${args.Comment} 
avalanche-danger-t-i-d=${args.AvalancheDangerTID}
short-version=${args.shortVersion} 
avalanche-danger-name=${args.AvalancheDangerName}
>
</varsom-avalanche-evaluation2> `;

export const VarsomAvalancheEvaluation2 = Template.bind({});
VarsomAvalancheEvaluation2.args = {
  AvalancheEvaluation: "'Moderat skredfare'",
  Comment: "'På dette stedet. Beskrivelse: Overflatrim'",
  AvalancheDevelopment:
    "'Fortsatt lave kvelds og nattetemperaturer gjør at utvikling av kantkorn vil kunne fortsette. Fortsatt løs snø tilgjengelig for transport i høyden, så ved vind endring vil det kunne dannes nye myke flak i lesider. Sola begynner også å påvirke snøoverflaten nå, så i bratte solhellinger kan bindinger svekkes, og det kan gå naturlig utløste løssnøskred'",
  AvalancheDangerTID: 1,
  AvalancheDangerName: '1 Liten',
};
