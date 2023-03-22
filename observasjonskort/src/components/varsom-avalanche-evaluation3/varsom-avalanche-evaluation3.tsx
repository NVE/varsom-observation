import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-evaluation3',
  styleUrl: 'varsom-avalanche-evaluation3.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation3 {

  @Prop() strings: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ForecastCorrectName: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheEvaluation: any;
  @Prop() AvalancheDevelopment: any;
  @Prop() ForecastCorrectTID: any;
  @Prop() ForecastComment: any;



  render(){
    return <div> 

  {/* TODO IMPLEMENT PICTURE ... */}    
  
    {this.AvalancheEvaluation ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ObsName : "Skredfareurdering" }
    _value={this.AvalancheEvaluation}
    ></varsom-key-value>
    :""}

    {this.ForecastCorrectName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ForecastCorrectTID : "Varslelets riktighet" }
    _value={this.ForecastCorrectName}
    ></varsom-key-value>
    :""}

    {this.AvalancheDevelopment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.AvalancheDevelopment : "Utvikling" }
    _value={this.AvalancheDevelopment}
    ></varsom-key-value>
    :""}

    {this.ForecastComment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheEvaluation3.ForecastComment : "Kommentar" }
    _value={this.ForecastComment}
    ></varsom-key-value>
    :""}


    
    </div>
  }
    
  }

  
  
