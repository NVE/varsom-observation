import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-ice-cover-observation',
  styleUrl: 'varsom-ice-cover-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceCoverObservation {

  @Prop() strings: any;
  @Prop() shortVersion: any;
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

<varsom-label
      label={this.strings ? this.strings.Observations.IceCoverObs.ObsName : "Isdekning"}
      ></varsom-label>

<div class="content" tabIndex={0}>
    {this.IceCoverName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceCoverTName : (this.shortVersion ? null : "Isdekning") }
    _value={this.IceCoverName}
    ></varsom-key-value>
    :""}

    {this.IceCoverBeforeName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceCoverBeforeTName : (this.shortVersion ? null : "Isdekning før observasjon") }
    _value={this.IceCoverBeforeName}
    ></varsom-key-value>
    :""}

    {this.IceCoverAfterName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceCoverAfterTName : (this.shortVersion ? null : "Isdekning etter observasjon") }
    _value={this.IceCoverAfterName}
    ></varsom-key-value>
    :""}

    {this.IceCoverName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceCoverAfterTName : (this.shortVersion ? null : "Isdekning etter observasjon") }
    _value={this.IceCoverName}
    ></varsom-key-value>
    :""}

    {this.IceCapacityName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceCapacityTName : (this.shortVersion ? null : "Bæreevne") }
    _value={this.IceCapacityName}
    ></varsom-key-value>
    :""}

    {this.IceSkateabilityName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceSkateabilityTName : (this.shortVersion ? null : "Skøytbarhet") }
    _value={this.IceSkateabilityName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

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
  
    <div class="border"></div>
    </div>
  }
    
  }

  
  
