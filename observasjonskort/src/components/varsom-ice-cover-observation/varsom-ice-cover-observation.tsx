import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-ice-cover-observation',
  styleUrl: 'varsom-ice-cover-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceCoverObservation {

  @Prop() strings: any;
  @Prop() IceCoverBeforeName: any;
  @Prop() IceCoverName: any;
  @Prop() IceCoverAfterName: any;
  @Prop() IceSkateabilityName: any;
  @Prop() IceCapacityName: any;
  @Prop() IceCoverBeforeTID: any;
  @Prop() IceCoverTID: any;
  @Prop() IceCoverAfterTID: any;
  @Prop() Comment: any;
  @Prop() IceSkateabilityTID: any;
  @Prop() IceCapacityTID: any;



  render(){
    return <div> 

     not implemented

    
    </div>
  }
    
  }

  
  
