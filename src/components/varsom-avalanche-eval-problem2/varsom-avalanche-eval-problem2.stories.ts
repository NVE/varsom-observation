export default {
  //source: https://ionic.io/blog/how-to-use-storybook-with-stencil
  title: 'Components/AvalancheEvaluationProblem2',
  argTypes: {
    shortVersion: { control: 'select', options: ['true (select blank for full version)', ''], defaultValue: '' },
  },
};

const Template = args => `<varsom-avalanche-eval-problem2
avalanche-ext-name=${args.AvalancheExtName} 
Comment=${args.Comment} 
aval-trigger-simple-name=${args.AvalTriggerSimpleName} 
aval-probability-name=${args.AvalProbabilityName} 
aval-propagation-name=${args.AvalPropagationName} 
destructive-size-ext-name=${args.DestructiveSizeExtName} 
aval-cause-name=${args.AvalCauseName}
aval-cause-depth-name=${args.AvalCauseDepthName}
aval-cause-attribute-light-tid=${args.AvalCauseAttributeLightTID} 
valid-exposition=${args.ValidExposition} 
short-version=${args.shortVersion} 
>
</varsom-avalanche-eval-problem2> `;

export const VarsomAvalancheEvaluationProblem = Template.bind({});
VarsomAvalancheEvaluationProblem.args = {
  Comment: "'Solutløste skred'",
  AvalancheExtName: "'Tørre flakskred'",
  AvalTriggerSimpleName: "'Svært vanskelig å løse ut'",
  AvalProbabilityName: "'Lite sannsynlig'",
  AvalPropagationName: "'Få bratte heng'",
  AvalProName: "'Lite sannsynlig'",
  DestructiveSizeExtName: "'2 - middels'",
  AvalCauseName: "'Nedføyket svakt lag med nysnø'",
  AvalCauseDepthName: "'Innen en halv meter'",
  AvalCauseAttributeLightTID:
    "'Det svake laget bryter både lett og glatt. Laget der bruddet skjer er tynt < 3 cm. Det overliggende laget er mykt. Stor, tydelig gjenkjennbar krystall i det svake laget.'",
  ValidExposition: '00011100',
};
