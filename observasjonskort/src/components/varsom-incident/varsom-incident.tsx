import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-incident',
  styleUrl: 'varsom-incident.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIncident {

  @Prop() strings: any; 
  @Prop() shortVersion: any;
  @Prop() GeoHazardName: any; 
  @Prop() ActivityInfluencedName: any; 
  @Prop() DamageExtentName: any; 
  @Prop() ForecastAccurateName: any; 
  @Prop() SafetyGearName: any; 
  @Prop() LocalTouristName: any; 
  @Prop() LocalKnowledgeName: any; 
  @Prop() RescueName: any; 
  @Prop() SlopeActivityName: any; 
  @Prop() IncidentURLs: any[]; 
  @Prop() GeoHazardTID: any; 
  @Prop() ActivityInfluencedTID: any; 
  @Prop() DamageExtentTID: any;  
  @Prop() ForecastAccurateTID: any; 
  @Prop() LocalTouristTID: any; 
  @Prop() LocalKnowledgeTID: any; 
  @Prop() InvolvedNum: any; 
  @Prop() CasualtiesNum: any; 
  @Prop() HarmedNum: any; 
  @Prop() DeadNum: any; 
  @Prop() EvacuatedNum: any; 
  @Prop() TrafficObstructed: any; 
  @Prop() MaterialDamages: any; 
  @Prop() SafetyGearTID: any; 
  @Prop() RescueTID: any; 
  @Prop() SlopeActivityTID: any; 
  @Prop() DtEndTime: any; 
  @Prop() IncidentHeader: any; 
  @Prop() IncidentIngress: any; 
  @Prop() IncidentText: any; 
  @Prop() Comment: any; 
  @Prop() Attachments: Attachment[];

  render(){
    return <div class="container"> 

<varsom-label
      label={this.strings ? this.strings.Observations.Incident.ObsName : "Ulykke / Hendelse"}
      ></varsom-label>

<div class="content">
{this.IncidentHeader ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceSkateabilityTName : (this.shortVersion ? null : "Overskrift") }
    _value={this.IncidentHeader}
    ></varsom-key-value>
    :""}

{this.IncidentIngress ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.IncidentIngress : (this.shortVersion ? null : "Ingress") }
    _value={this.IncidentIngress}
    ></varsom-key-value>
    :""}

{this.DamageExtentName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.DamageExtentTID : (this.shortVersion ? null : "Skadeomfang") }
    _value={this.DamageExtentName}
    ></varsom-key-value>
    :""}

{this.ActivityInfluencedName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.ActivityInfluencedTID : (this.shortVersion ? null : "Aktivitet") }
    _value={this.ActivityInfluencedName}
    ></varsom-key-value>
    :""}

{this.LocalTouristName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Local or tourist" }
    _value={this.LocalTouristName}
    ></varsom-key-value>
    :""}

{this.LocalKnowledgeName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Local knowledge" }
    _value={this.LocalKnowledgeName}
    ></varsom-key-value>
    :""}

{this.SafetyGearName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Safety gear" }
    _value={this.SafetyGearName}
    ></varsom-key-value>
    :""}

{this.RescueName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Rescue" }
    _value={this.RescueName}
    ></varsom-key-value>
    :""}

      
{this.SlopeActivityName ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Slope activity" }
    _value={this.SlopeActivityName}
    ></varsom-key-value>
    :""}

          
{this.TrafficObstructed ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Obsctruction of traffic" }
    _value={this.TrafficObstructed}
    ></varsom-key-value>
    :""}

{this.MaterialDamages ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Material damage" }
    _value={this.MaterialDamages}
    ></varsom-key-value>
    :""}

{this.InvolvedNum ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Number involved" }
    _value={this.InvolvedNum}
    ></varsom-key-value>
    :""}

{this.HarmedNum ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Number injured" }
    _value={this.HarmedNum}
    ></varsom-key-value>
    :""}

{this.DeadNum ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Number dead" }
    _value={this.DeadNum}
    ></varsom-key-value>
    :""}

{this.EvacuatedNum ? 
    <varsom-key-value
    _key={this.shortVersion ? null : "Number evacuated" }
    _value={this.EvacuatedNum}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

<br></br>

{this.IncidentURLs && this.IncidentURLs.length > 0 ? 
      <host>
    
      <b>{this.strings ? this.strings.Observations.GeneralObservation.Urls : "Lenker"}</b>
     
      {this.IncidentURLs.map((el: Url = {}) =>{
            return <varsom-url
            strings={this.strings}
            UrlDescription={el.UrlDescription ? el.UrlDescription : null}
            UrlLine={el.UrlLine ? el.UrlLine : null}
            >

            </varsom-url>
        })
        } </host> : ""}

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

  
  
