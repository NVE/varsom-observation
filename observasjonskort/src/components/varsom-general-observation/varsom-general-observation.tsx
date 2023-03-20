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

      not implemented 

      
{this.Urls.map((el: Url = {}) =>{
            return <varsom-url
            strings={this.strings}
            UrlDescription={el.UrlDescription ? el.UrlDescription : null}
            UrlLine={el.UrlLine ? el.UrlLine : null}
            
            >

            </varsom-url>
        })
        }

    </div>
  }
    
  }

  
  
