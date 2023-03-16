import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-activity-obs',
  styleUrl: 'varsom-avalanche-activity-obs.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs {

  @Prop() strings: any;
  @Prop() AvalancheActivityObsID: any;
  @Prop() Aspect: any;
  @Prop() HeigthStartZone: any;
  @Prop() DtAvalancheTime: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() DestructiveSizeName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() EstimatedNumName: any;
  @Prop() AvalancheTID: any;
  @Prop() AvalancheName: any;
  @Prop() AvalancheTriggerTID: any;
  @Prop() AvalancheTriggerName: any;
  @Prop() TerrainStartZoneTID: any;
  @Prop() TerrainStartZoneName: any;
  @Prop() SnowLine: any;
  @Prop() SnowLineName: any;
  @Prop() DtOffAvalancheTime: any;
  
  
  render(){
    return <div> 

      {this.AvalancheActivityObsID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheActivityObsID}
      </span> : ""}

      {this.Aspect ? 
      <span>
      <label>Label mangler: </label>
      {this.Aspect}
      </span> : ""}
      
      {this.HeigthStartZone ? 
      <span>
      <label>Label mangler: </label>
      {this.HeigthStartZone}
      </span> : ""}

      {this.DtAvalancheTime ? 
      <span>
      <label>Label mangler: </label>
      {this.DtAvalancheTime}
      </span> : ""}

      {this.DestructiveSizeTID ? 
      <span>
      <label>Label mangler: </label>
      {this.DestructiveSizeTID}
      </span> : ""}

      {this.DestructiveSizeName ? 
      <span>
      <label>Label mangler: </label>
      {this.DestructiveSizeName}
      </span> : ""}

      {this.EstimatedNumTID ? 
      <span>
      <label>Label mangler: </label>
      {this.EstimatedNumTID}
      </span> : ""}

      {this.EstimatedNumName ? 
      <span>
      <label>Label mangler: </label>
      {this.EstimatedNumName}
      </span> : ""}

      {this.AvalancheTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheTID}
      </span> : ""}
      
      {this.AvalancheName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheName}
      </span> : ""}

      {this.AvalancheTriggerName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheTriggerName}
      </span> : ""}


      {this.TerrainStartZoneTID ? 
      <span>
      <label>Label mangler: </label>
      {this.TerrainStartZoneTID}
      </span> : ""}

      
      {this.TerrainStartZoneName ? 
      <span>
      <label>Label mangler: </label>
      {this.TerrainStartZoneName}
      </span> : ""}

      {this.SnowLineName ? 
      <span>
      <label>Label mangler: </label>
      {this.SnowLineName}
      </span> : ""}

      {this.DtOffAvalancheTime ? 
      <span>
      <label>Label mangler: </label>
      {this.DtOffAvalancheTime}
      </span> : ""}

    </div>
  }
    
  }

  
  
