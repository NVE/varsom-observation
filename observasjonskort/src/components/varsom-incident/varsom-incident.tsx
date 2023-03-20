import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-incident',
  styleUrl: 'varsom-incident.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIncident {

  @Prop() strings: any; 
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

  render(){
    return <div> 


     not implemented
    
    </div>
  }
    
  }

  
  
