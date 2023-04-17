import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


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
  @Prop() Attachments: Attachment[];



  render(){
    return <div> 
<div class="content">
    {this.IceCoverName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceCoverTName : "Isdekning" }
    _value={this.IceCoverName}
    ></varsom-key-value>
    :""}

    {this.IceCoverBeforeName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceCoverBeforeTName : "Isdekning før observasjon" }
    _value={this.IceCoverBeforeName}
    ></varsom-key-value>
    :""}

    {this.IceCoverAfterName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceCoverAfterTName : "Isdekning etter observasjon" }
    _value={this.IceCoverAfterName}
    ></varsom-key-value>
    :""}

    {this.IceCoverName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceCoverTName : "Isdekning" }
    _value={this.IceCoverName}
    ></varsom-key-value>
    :""}

    {this.IceCapacityName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceCapacityTName : "Bæreevne" }
    _value={this.IceCapacityName}
    ></varsom-key-value>
    :""}

    {this.IceSkateabilityName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.IceSkateabilityTName : "Skøytbarhet" }
    _value={this.IceSkateabilityName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceCoverObs.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}


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
    <div class="border"></div>
    
    </div>
  }
    
  }

  
  
