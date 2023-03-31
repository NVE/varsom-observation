import { Component, Prop, h } from '@stencil/core';
import { Url } from '../varsom-observasjon/observation-model';

@Component({
  tag: 'varsom-general-observation',
  styleUrl: 'varsom-general-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomGeneralObservation {

  @Prop() strings: any;
  @Prop() GeoHazardName: any;
  @Prop() Urls: Url[];
  @Prop() GeoHazardTID: any;
  @Prop() ObsComment: any;
  @Prop() ObsHeader: any;
  @Prop() Comment: any;

  render(){
    return <div> 

      <varsom-label
      label={this.strings ? this.strings.GeneralObservation.Notes : "Notater"}
      ></varsom-label>

    <varsom-label-small
      label={this.ObsHeader ? this.ObsHeader : ""}
      ></varsom-label-small>

<div>
    {this.ObsComment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.GeneralObservation.Kommentar : "Kommentar" }
    _value={this.ObsComment}
    ></varsom-key-value>
    :""}
</div>

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
        } </div>
        : ""}
        
    </div>
  }
    
  }

  
  
