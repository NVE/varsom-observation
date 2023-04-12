import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-danger-obs',
  styleUrl: 'varsom-avalanche-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheDangerObs {

  @Prop() strings: any;
  @Prop() DangerSignName: any;
  @Prop() AvalancheDangerObsID: any;
  @Prop() Comment: any;
  @Prop() DangerSignTID: any;
    
 
  render(){
    return <div class="parent"> 

    {this.DangerSignName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheDangerObs.DangerSignTID : "Type" }
    _value={this.DangerSignName}
    ></varsom-key-value>
    :""}

    <div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.DangerObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>
 
    </div>
  }
    
  }

  
  
