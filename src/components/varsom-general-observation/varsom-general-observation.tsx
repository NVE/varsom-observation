import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';

@Component({
  tag: 'varsom-general-observation',
  styleUrl: 'varsom-general-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomGeneralObservation {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() GeoHazardName: any;
  @Prop() Urls: Url[];
  @Prop() GeoHazardTID: any;
  @Prop() ObsComment: any;
  @Prop() ObsHeader: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings(getLocaleFromDom());
  }

  render(){
    return <div> 

      <varsom-label
      label={this.strings ? this.strings.Observations.GeneralObservation.Notes : "Notater"}
      ></varsom-label>

  

<div class="content">

<varsom-label-small
      label={this.ObsHeader ? this.ObsHeader : ""}
      ></varsom-label-small>
      
    {this.ObsComment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.GeneralObservation.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.ObsComment}
    ></varsom-key-value>
    :""}


      {this.Urls ? 
      <div>
{this.Urls.map((el: Url = {}) =>{
            return <varsom-url
            UrlDescription={el.UrlDescription ? el.UrlDescription : null}
            UrlLine={el.UrlLine ? el.UrlLine : null}
            >

            </varsom-url>
        })
        } </div>
        : ""}
        
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

  
  
