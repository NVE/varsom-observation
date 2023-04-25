import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-avalanche-obs',
  styleUrl: 'varsom-avalanche-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheObs {

  @Prop() strings: any;
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


 

  render(){
    return <div class="container"> 

    <varsom-label
      label={this.strings ? this.strings.Observations.AvalancheObs.ObsName : "Skredhendelse"}  
      ></varsom-label>
<div class="content">
<div>
    {this.StartLat ? 
    <span><img src={getAssetPath(`/assets/icons/skred-startposisjon.svg`)}>
      </img>Skredet startet her</span> 
    : ""}

    {this.StopLat ? 
    <span><img src={getAssetPath(`/assets/icons/skred-stopposisjon.svg`)}>
      </img>Skredet stoppet her</span> 
    : ""}
 </div>

 <br></br>

    {this.DtAvalancheTime ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.DtAvalancheTime.ForecastCorrectTID : (this.shortVersion ? null : "Tid") }
    _value={this.DtAvalancheTime}
    shortVersion={this.shortVersion}
    ></varsom-key-value>
    :""}

    {this.AvalancheName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.AvalancheTID : (this.shortVersion ? null : "Type") }
    _value={this.AvalancheName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.DestructiveSizeTID : (this.shortVersion ? null : "Størrelse") }
    _value={this.DestructiveSizeName}
    ></varsom-key-value>
    :""}
    
    {this.AvalancheTriggerName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.AvalancheTriggerTID : (this.shortVersion ? null : "Skredutløser") }
    _value={this.AvalancheTriggerName}
    ></varsom-key-value>
    :""}

    {this.HeightStartZone ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.HeigthStartZone : (this.shortVersion ? null : "Løsneområdet") }
    _value={this.HeightStartZone}
    ></varsom-key-value>
    :""}

    {this.HeightStopZone ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.HeightStopZone : (this.shortVersion ? null : "Stoppområdet") }
    _value={this.HeightStopZone}
    ></varsom-key-value>
    :""}

    {/* TODO IMPLEMENT TEXT FOR START AND STOP POINT */ }
    
    {this.AvalCauseName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.AvalCauseTID : (this.shortVersion ? null : "Svakt lag") }
    _value={this.AvalCauseName}
    ></varsom-key-value>
    :""}

    {this.TerrainStartZoneName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.TerrainStartZoneTID : (this.shortVersion ? null : "Terreng i løsneområdet") }
    _value={this.TerrainStartZoneName}
    ></varsom-key-value>
    :""}

    {this.Trajectory ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.TrajectoryName : (this.shortVersion ? null : "Skredbanenavn") }
    _value={this.Trajectory}
    ></varsom-key-value>
    :""}

    {this.RemotelyTriggered? 
    <varsom-key-value
    _key="Remotely triggered?"
    _value={this.RemotelyTriggered == true ? "Was remotely triggered" : "No"}
    ></varsom-key-value>
    :""}


<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.AvalancheObs.AvalancheObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>

    {this.Attachments ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </div> : ""}


    </div>
    
  }
    
  }

  
  
