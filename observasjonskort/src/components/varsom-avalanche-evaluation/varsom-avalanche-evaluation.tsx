import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-evaluation',
  styleUrl: 'varsom-avalanche-evaluation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation {

  @Prop() strings: any;
  @Prop() RegID: any;
  @Prop() CanPublish: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ValidExposition: any;
  @Prop() ValidHeightRelative: any;
  @Prop() ValidHeightFrom: any;
  @Prop() ValidHeigtTo: any;
  @Prop() AvalancheProblemTID1: any;
  @Prop() AvalancheProblemName1: any;
  @Prop() AvalancheProblemTID2: any;
  @Prop() AvalancheProblemName2: any;
  @Prop() AvalancheProblemTID3: any;
  @Prop() AvalancheProblemName3: any;
  @Prop() AvalancheEvaluation1: any;
  @Prop() Comment: any;


  render(){
    return <div> 

      {/* TODO: GENERATE ICON/PLOT*/ }


    {this.AvalancheEvaluation1 ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation.AvalancheEvaluation1 : "Skredfareurdering" }
    _value={this.AvalancheEvaluation1}
    ></varsom-key-value>
    :""}

    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}






     

    </div>
  }
    
  }

  
  
