import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-landslide-observation',
  styleUrl: 'varsom-landslide-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomLandslideObservation {

  @Prop() strings: any;
  @Prop() LandSlideName?: any;
  @Prop() LandSlideTriggerName?: any;
  @Prop() ActivityInfluencedName?: any;
  @Prop() GeoHazardName?: any;
  @Prop() ForecastAccurateName?: any;
  @Prop() Imageurl?: any;
  @Prop() DamageExtentName?: any;
  @Prop() LandSlideTID?: any;
  @Prop() LandSlideTriggerTID?: any;
  @Prop() Comment?: any;
  @Prop() LandSlideSizeName?: any;
  @Prop() GeoHazardTID?: any;
  @Prop() ActivityInfluencedTID?: any;
  @Prop() ForecastAccurateTID?: any;
  @Prop() DamageExtentTID?: any;
  @Prop() StartLat?: any;
  @Prop() StartLong?: any;
  @Prop() StopLat?: any;
  @Prop() StopLong?: any;
  @Prop() DtLandSlideTimeEnd?: any;
  @Prop() DtLandSlideTime?: any;
  @Prop() LandSlideSizeTID?: any;
  
  

  render(){
    return <div> 


      {this.LandSlideName ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideName}
      </span> : ""}

      {this.LandSlideTriggerName ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideTriggerName}
      </span> : ""}

      {this.LandSlideSizeName ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideSizeName}
      </span> : ""}

      {this.GeoHazardName ? 
      <span>
      <label>Label mangler: </label>
      {this.GeoHazardName}
      </span> : ""}

      {this.ActivityInfluencedName ? 
      <span>
      <label>Label mangler: </label>
      {this.ActivityInfluencedName}
      </span> : ""}

      {this.ForecastAccurateName ? 
      <span>
      <label>Label mangler: </label>
      {this.ForecastAccurateName}
      </span> : ""}

      {this.DamageExtentName ? 
      <span>
      <label>Label mangler: </label>
      {this.DamageExtentName}
      </span> : ""}

      {this.Imageurl ? 
      <span>
      <label>Label mangler: </label>
      {this.Imageurl}
      </span> : ""}

      {this.LandSlideTID ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideTID}
      </span> : ""}

      {this.LandSlideTID ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideTID}
      </span> : ""}

      {this.LandSlideTriggerTID ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideTriggerTID}
      </span> : ""}

      {this.LandSlideSizeTID ? 
      <span>
      <label>Label mangler: </label>
      {this.LandSlideSizeTID}
      </span> : ""}

      {this.GeoHazardTID ? 
      <span>
      <label>Label mangler: </label>
      {this.GeoHazardTID}
      </span> : ""}

      {this.ActivityInfluencedTID ? 
      <span>
      <label>Label mangler: </label>
      {this.ActivityInfluencedTID}
      </span> : ""}

      {this.ForecastAccurateTID ? 
      <span>
      <label>Label mangler: </label>
      {this.ForecastAccurateTID}
      </span> : ""}

      {this.DamageExtentTID ? 
      <span>
      <label>Label mangler: </label>
      {this.DamageExtentTID}
      </span> : ""}

      {this.StartLat ? 
      <span>
      <label>Label mangler: </label>
      {this.StartLat}
      </span> : ""}

      {this.StartLong ? 
      <span>
      <label>Label mangler: </label>
      {this.StartLong}
      </span> : ""}

      {this.StopLat ? 
      <span>
      <label>Label mangler: </label>
      {this.StopLat}
      </span> : ""}

      {this.StopLong ? 
      <span>
      <label>Label mangler: </label>
      {this.StopLong}
      </span> : ""}

      {this.DtLandSlideTime ? 
      <span>
      <label>Label mangler: </label>
      {this.DtLandSlideTime}
      </span> : ""}

      {this.DtLandSlideTimeEnd ? 
      <span>
      <label>Label mangler: </label>
      {this.DtLandSlideTimeEnd}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Comment}: </label>
      {this.Comment}
      </span> : ""}

      
    
    </div>
  }
    
  }

  
  
