import { Component, Prop, h} from '@stencil/core';
import { Attachment, Observation } from '../varsom-observation/observation-model';
import { getStartEndTimeFormatted } from '../../utils/date-utils';
import { getLocaleComponentStrings } from '../../utils/locale';
import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-avalanche-obs',
  styleUrl: 'varsom-avalanche-obs.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomAvalancheObs {

  private strings: any
  @Prop() shortVersion: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalancheTriggerName: any;
  @Prop() AvalancheName: any;
  @Prop() TerrainStartZoneName: any;
  @Prop() AvalCauseName: any;
  @Prop() DtAvalancheTime: any;
  @Prop() Aspect: any;
  @Prop() HeightStartZone: any;
  @Prop() HeightStopZone: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalancheTriggerTID: any;
  @Prop() AvalancheTID: any;
  @Prop() TerrainStartZoneTID: any;
  @Prop() SnowLine: any;
  @Prop() ValidExposition: any;
  @Prop() AvalCauseTID: any;
  @Prop() FractureHeight: any;
  @Prop() FractureWidth: any;
  @Prop() Trajectory: any;
  @Prop() StartLat: any;
  @Prop() StartLong: any;
  @Prop() StopLat: any;
  @Prop() StopLong: any;
  @Prop() RemotelyTriggered: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];
  @Prop() Observation: Observation;

  @Element() elem: HTMLElement;

  get avalancheTimeFormatted(): string {
    return getStartEndTimeFormatted(this.DtAvalancheTime, null, this.elem);
  }

  async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  get formatStartStopInfo(): string {
  
    if (this.HeightStartZone === -1){  //start height not given. It wil only show stop height
      return `${this.strings.Observations.AvalancheObs.Avalanche} ${this.strings.Observations.AvalancheObs.HeightStopZoneText}
      ${this.HeightStopZone} ${this.strings.Observations.AvalancheObs.MetersAboveSeaLevel}
    `
    }

    if (this.HeightStopZone === -1){  //stop height not given. It wil only show start height
      return `${this.strings.Observations.AvalancheObs.Avalanche} ${this.strings.Observations.AvalancheObs.HeightStartZoneText} ${this.HeightStartZone} 
      ${this.strings.Observations.AvalancheObs.MetersAboveSeaLevel} 
     `
    }
    else       //both values given. Shows start and stop values
      return `${this.strings.Observations.AvalancheObs.Avalanche} ${this.strings.Observations.AvalancheObs.HeightStartZoneText} ${this.HeightStartZone} 
      ${this.strings.Observations.AvalancheObs.MetersAboveSeaLevel} ${this.strings.Observations.AvalancheObs.And} ${this.strings.Observations.AvalancheObs.HeightStopZoneText}
      ${this.HeightStopZone} ${this.strings.Observations.AvalancheObs.MetersAboveSeaLevel}
    `
  }

  render(){

    
    return <div class="obs-container"> 

    <varsom-label
      label={this.strings ? this.strings.Observations.AvalancheObs.ObsName : "Skredhendelse"}  
      ></varsom-label>
<div class="content">

{/** 
 {this.StartLat && this.StopLat && this.Observation._latitude ? 
<varsom-static-map
observation={this.Observation}
allowZoom={true}
avalanche={true}
></varsom-static-map>
 : null}

 <br></br>
 */}

 

 <div class="content">

    {this.DtAvalancheTime ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.Time : (this.shortVersion ? null : "Tid") }
    _value={this.avalancheTimeFormatted}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.AvalancheName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.AvalancheTID : (this.shortVersion ? null : "Type") }
    _value={this.AvalancheName}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.DestructiveSizeTID : (this.shortVersion ? null : "Størrelse") }
    _value={this.DestructiveSizeName}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}
    
    {this.AvalancheTriggerName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.AvalancheTriggerTID : (this.shortVersion ? null : "Skredutløser") }
    _value={this.AvalancheTriggerName}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {(this.HeightStartZone !== -1 && this.HeightStopZone !== -1) ?  //if no start and stop value, it will not render
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.HeightStartZone : (this.shortVersion ? null : "Løsneområdet") }
    _value={this.formatStartStopInfo}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}


    {/* TODO IMPLEMENT TEXT FOR START AND STOP POINT */ }
    
    {this.AvalCauseName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.AvalCauseTID : (this.shortVersion ? null : "Svakt lag") }
    _value={this.AvalCauseName}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.TerrainStartZoneName ? 
    <varsom-key-value
    _key={this.strings?.Observations.AvalancheObs.TerrainStartZoneTID }
    _value={this.TerrainStartZoneName}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.Trajectory ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.TrajectoryName : (this.shortVersion ? null : "Skredbanenavn") }
    _value={this.Trajectory}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.RemotelyTriggered? 
    <varsom-key-value
    _key="Remotely triggered?"
    _value={this.RemotelyTriggered == true ? "Was remotely triggered" : "No"}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

<br></br>
<br></br>

{this.ValidExposition ? 
    <div><img src={(`src/assets/svg/ext/${this.ValidExposition}.svg`)}></img></div>
    :""}  


    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.AvalancheObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}
    </div>

    {(this.Attachments && !this.shortVersion) ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </span> : ""}


    </div>

   </div> 
  }
 
    
  }

  
  
