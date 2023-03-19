import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-general-observation',
  styleUrl: 'varsom-general-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomGeneralObservation {

  @Prop() strings: any;
  @Prop() GeoHazardName: any;
  @Prop() Urls: any[];
  @Prop() GeoHazardTID: any;
  @Prop() ObsComment: any;
  @Prop() ObsHeader: any;
  @Prop() Comment: any;

  render(){
    return <div> 

      not implemented 
      
    </div>
  }
    
  }

  
  
