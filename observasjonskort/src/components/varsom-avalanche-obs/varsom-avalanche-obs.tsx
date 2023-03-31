import { Component, Prop, h, getAssetPath } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-obs',
  styleUrl: 'varsom-avalanche-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheObs {

  @Prop() strings: any;
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


 

  render(){
    return <div> 

      {/* TODO IMPLEMENT MAP and translation for start/stop*/}

    <varsom-label
      label={this.strings ? this.strings.Observations.AvalancheObs.ObsName : "Skredhendelse"}  
      ></varsom-label>

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

    {this.DtAvalancheTime ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.DtAvalancheTime : "Tid" }
    _value={this.DtAvalancheTime}
    ></varsom-key-value>
    :""}

    {this.AvalancheName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.AvalancheTID : "Type" }
    _value={this.AvalancheName}
    ></varsom-key-value>
    :""}

    {this.DestructiveSizeName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.DestructiveSizeTID : "Størrelse" }
    _value={this.DestructiveSizeName}
    ></varsom-key-value>
    :""}
    
    {this.AvalancheTriggerName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.AvalancheTriggerTID : "Skredutløser" }
    _value={this.AvalancheTriggerName}
    ></varsom-key-value>
    :""}

    {this.HeightStartZone ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.HeigthStartZone : "Løsneområdet" }
    _value={this.HeightStartZone}
    ></varsom-key-value>
    :""}

    {this.HeightStopZone ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.HeightStopZone : "Stoppområdet" }
    _value={this.HeightStopZone}
    ></varsom-key-value>
    :""}

    {/* TODO IMPLEMENT TEXT FOR START AND STOP POINT */ }
    
    {this.AvalCauseName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.AvalCauseTID : "Svakt lag" }
    _value={this.AvalCauseName}
    ></varsom-key-value>
    :""}

    {this.TerrainStartZoneName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.TerrainStartZoneTID : "Terreng i løsneområdet" }
    _value={this.TerrainStartZoneName}
    ></varsom-key-value>
    :""}

    {this.Trajectory ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.TrajectoryName : "Skredbanenavn" }
    _value={this.Trajectory}
    ></varsom-key-value>
    :""}

    {/* TODO REMOTELY TRIGGERED YES/NO */}

    {this.ValidExposition ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.ValidExposition : "Eksposisjon" }
    _value={this.ValidExposition}
    ></varsom-key-value>
    :""}

<div>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.AvalancheObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
    </div>

    </div>
  }
    
  }

  
  
