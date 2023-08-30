import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';


import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-incident',
  styleUrl: 'varsom-incident.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIncident {

  private strings;
  @Prop() shortVersion: string;
  @Prop() GeoHazardName: string;
  @Prop() ActivityInfluencedName: string;
  @Prop() DamageExtentName: string;
  @Prop() ForecastAccurateName: string;
  @Prop() SafetyGearName: string;
  @Prop() LocalTouristName: string;
  @Prop() LocalKnowledgeName: string;
  @Prop() RescueName: string;
  @Prop() SlopeActivityName: string;
  @Prop() IncidentURLs: Url[]; 
  @Prop() GeoHazardTID: number; 
  @Prop() ActivityInfluencedTID: number; 
  @Prop() DamageExtentTID: number; 
  @Prop() ForecastAccurateTID: number;  
  @Prop() LocalTouristTID: number; 
  @Prop() LocalKnowledgeTID: number; 
  @Prop() InvolvedNum: number; 
  @Prop() CasualtiesNum: number; 
  @Prop() HarmedNum: number; 
  @Prop() DeadNum: number; 
  @Prop() EvacuatedNum: number; 
  @Prop() TrafficObstructed: boolean; 
  @Prop() MaterialDamages: boolean; 
  @Prop() SafetyGearTID: number; 
  @Prop() RescueTID: number; 
  @Prop() SlopeActivityTID: number; 
  @Prop() DtEndTime: string; 
  @Prop() IncidentHeader: string;
  @Prop() IncidentIngress: string;
  @Prop() IncidentText: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }
  
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
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.LocalTouristTID : (this.shortVersion ? null : "Lokal eller tilreisende") }
    _value={this.LocalTouristName}
    ></varsom-key-value>
    :""}

{this.LocalKnowledgeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.LocalKnowledgeTID : (this.shortVersion ? null : "Lokalkjent") }
    _value={this.LocalKnowledgeName}
    ></varsom-key-value>
    :""}

{this.SafetyGearName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.SafetyGearTID : (this.shortVersion ? null : "Sikkerhetsutstyr") }
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
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.SlopeActivityTID : (this.shortVersion ? null : "Turfase") }
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
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Incident.InvolvedNum : (this.shortVersion ? null : "Antall involverte") }
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
            UrlDescription={el.UrlDescription ? el.UrlDescription : null}
            UrlLine={el.UrlLine ? el.UrlLine : null}
            >

            </varsom-url>
        })
        } </host> : ""}

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
  }
    
  }

  
  
