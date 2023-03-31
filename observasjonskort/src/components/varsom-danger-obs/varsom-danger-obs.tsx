import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-danger-obs',
  styleUrl: 'varsom-danger-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomDangerObs {

  @Prop() strings: any;
  @Prop() GeoHazardName: any;
  @Prop() DangerSignName: any;
  @Prop() GeoHazardTID: any;
  @Prop() DangerSignTID: any;
  @Prop() Comment: any;
 
  render(){
    return <div> 

    {this.DangerSignName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.DangerObs.DangerSignTName : "Type" }
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

  
  
