import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-water-measurement',
  styleUrl: 'varsom-water-measurement.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterMeasurement {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() DtMeasurementTime: any;
  @Prop() WaterLevelValue: any;
  @Prop() Attachments: Attachment[];
  

  render(){
    return <div class="container"> 


<varsom-label-small
      label={this.strings ? this.strings.Observations.WaterLevel2.WaterMeasurement : "Vannmåling"}
      ></varsom-label-small>
{this.DtMeasurementTime ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.LandslideObs.Time: "Tid" }
    _value={this.DtMeasurementTime}
    ></varsom-key-value>
    :""}

{this.WaterLevelValue ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel2.WaterMeasurementValue: "Tid" }
    _value={this.WaterLevelValue}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WaterLevel2.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    
    </div>
    
  }
    
  }

  
  
