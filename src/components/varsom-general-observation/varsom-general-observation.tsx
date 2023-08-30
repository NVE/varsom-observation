import { Component, Prop, h } from '@stencil/core';
import { Attachment, Url } from '../varsom-observation/observation-model';
import { getLocaleComponentStrings } from '../../utils/locale';

import { Element } from '@stencil/core';

@Component({
  tag: 'varsom-general-observation',
  styleUrl: 'varsom-general-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomGeneralObservation {

  private strings;
  @Prop() shortVersion: string;
  @Prop() GeoHazardName: string;
  @Prop() Urls: Url[];
  @Prop() GeoHazardTID: number;
  @Prop() ObsComment: string;
  @Prop() ObsHeader: string;
  @Prop() Comment: string;
  @Prop() Attachments: Attachment[];

  @Element() elem: HTMLElement;

async componentWillLoad(){
 this.strings = await getLocaleComponentStrings(this.elem);
  }

  render(){
    return <div> 

      <varsom-label
      label={this.strings.Observations.GeneralObservation.Notes}
      ></varsom-label>

  

<div class="content">

<varsom-label-small
      label={this.ObsHeader ? this.ObsHeader : ""}
      ></varsom-label-small>
      
    {this.ObsComment ? 
    <varsom-key-value
    _key={this.strings.Observations.GeneralObservation.Comment}
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

  
  
