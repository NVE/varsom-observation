import { Component, Prop, h } from '@stencil/core';
import { formatDateString } from '../../utils/date-utils';
import { Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';

@Component({
  tag: 'varsom-water-measurement',
  styleUrl: 'varsom-water-measurement.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterMeasurement {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() DtMeasurementTime: any;
  @Prop() WaterLevelValue: any;  

  @Element() elem: HTMLElement;

  get waterMeasurementTimeFormatted(): string {
    return formatDateString(this.DtMeasurementTime)
  }

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }
  
  render(){
    return <div> 


<varsom-label-small
      label={this.strings ? this.strings.Observations.WaterLevel2.WaterMeasurement : "Vannmåling"}
      ></varsom-label-small>
{this.DtMeasurementTime ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.Time: (this.shortVersion ? null : "Tid") }
    _value={this.waterMeasurementTimeFormatted}
    ></varsom-key-value>
    :""}

{this.WaterLevelValue ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.WaterLevelValue: (this.shortVersion ? null : "Størrelse") }
    _value={this.WaterLevelValue}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.Comment: (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    
    </div>
    
  }
    
  }

  
  
