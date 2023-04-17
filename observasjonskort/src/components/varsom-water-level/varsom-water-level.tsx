import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-water-level',
  styleUrl: 'varsom-water-level.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel {

  @Prop() strings: any;
  @Prop() WaterLevelDescribed: any;
  @Prop() WaterLevelValue: any;
  @Prop() WaterLevelRefTID: any;
  @Prop() WaterLevelRefName: any;
  @Prop() MeasuredDischarge: any;
  @Prop() IsRiver: any;

   
  render(){
    return <div class="parent"> 

<varsom-label-small
label={this.strings ? this.strings.Observations.WaterLevel.ObsName : "Vannstand"}
></varsom-label-small>

{this.WaterLevelRefTID ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelRefTName: "Referansenivå" }
    _value={this.WaterLevelRefName}
    ></varsom-key-value>
    :""}

{this.WaterLevelDescribed ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelDescribed: "Vannstand beskrivelse" }
    _value={this.WaterLevelDescribed}
    ></varsom-key-value>
    :""}

{this.WaterLevelValue ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel.WaterLevelValue: "Størrelse" }
    _value={this.WaterLevelValue}
    ></varsom-key-value>
    :""}

    
    </div>
  }
    
  }

  
  
