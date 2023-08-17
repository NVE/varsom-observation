import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-ice-thickness-layer',
  styleUrl: 'varsom-ice-thickness-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceThicknessLayer {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() IceLayerName: any;
  @Prop() IceLayerThickness: any;

  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }

  render(){
    return <div> 

    {(this.IceLayerThickness && this.IceLayerName)  ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.IceCoverObs.IceSkateabilityTName : (this.shortVersion ? null : "Islag (ovenfra og ned)") }
    _value={this.IceLayerThickness + " " + this.IceLayerName + ". " + (this.Comment ? this.Comment : "")}   
    ></varsom-key-value>
    :""}
    
    </div>
  }
    
  }

  
  
