import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observation/observation-model';

@Component({
  tag: 'varsom-landslide-observation',
  styleUrl: 'varsom-landslide-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomLandslideObservation {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() LandSlideName?: any;
  @Prop() LandSlideTriggerName?: any;
  @Prop() ActivityInfluencedName?: any;
  @Prop() GeoHazardName?: any;
  @Prop() ForecastAccurateName?: any;
  @Prop() Urls?: any[];
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
  @Prop() Attachments: Attachment[];
  
  

  render(){
    return <div class="container"> 

{/**TODO : IMPLEMENT MAP */}

      <varsom-label
      label={this.strings ? this.strings.Observations.LandslideObs.ObsName : "Skredhendelse"}
      ></varsom-label>

<div class="content">

    {(this.DtLandSlideTime && !this.DtLandSlideTimeEnd)  ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.Time : (this.shortVersion ? null : "Tid") }
    _value={this.DtLandSlideTime}
    ></varsom-key-value>
    :""}

    {(this.DtLandSlideTime && this.DtLandSlideTimeEnd && this.strings)  ? 
    <varsom-key-value
    shortVersion={this.shortVersion ? this.shortVersion : null }
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.Time : (this.shortVersion ? null : "Tid") }
    _value={(this.strings ? this.strings.Observations.LandslideObs.Between : "Mellom") + " " + this.DtLandSlideTime
   + " " + (this.strings ? this.strings.Observations.LandslideObs.And + " " : "og ") + 
   this.DtLandSlideTimeEnd
  }
    ></varsom-key-value>
    :""}

    {this.LandSlideName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.LandSlideTName : (this.shortVersion ? null : "Skredtype") }
    _value={this.LandSlideName}
    ></varsom-key-value>
    :""}

    {this.LandSlideSizeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.LandSlideSizeTName : (this.shortVersion ? null : "Størrelse") }
    _value={this.LandSlideSizeName}
    ></varsom-key-value>
    :""}

    {this.LandSlideTriggerName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.LandSlideTriggerTName : (this.shortVersion ? null : "Trigger") }
    _value={this.LandSlideTriggerName}
    ></varsom-key-value>
    :""}
      
    {this.DamageExtentName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.DamageExtentTName : (this.shortVersion ? null : "Omfang") }
    _value={this.DamageExtentName}
    ></varsom-key-value>
    :""}
    
    {this.ForecastAccurateName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.ForecastAccurateTName : (this.shortVersion ? null : "Stemte varsel på varsom.no?") }
    _value={this.ForecastAccurateName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.LandslideObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    {this.Urls ? 
      <div>
      {this.Urls.map((el: Url = {}) =>{
            return <varsom-url
            strings={this.strings}
            UrlDescription={el.UrlDescription ? el.UrlDescription : null}
            UrlLine={el.UrlLine ? el.UrlLine : null}
            >

            </varsom-url>
        })
        } </div> : ""}

    {this.Attachments ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            shortVersion={this.shortVersion ? this.shortVersion : null}
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

  
  