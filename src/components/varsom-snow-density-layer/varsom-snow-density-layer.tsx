import { Component, Prop, h } from '@stencil/core';
import { getLocaleComponentStrings, getLocaleFromDom } from '../../utils/locale';


@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop({mutable: true}) strings: any;
  @Prop() shortVersion: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;


  async componentWillLoad(){
    if (!this.strings)
    this.strings = await getLocaleComponentStrings();
  }
  
  render(){
    return <div> 

{this.Depth ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.DepthPlaceholder : (this.shortVersion ? null : "Dybde (cm)") }
    _value={this.Depth}
    ></varsom-key-value>
    :""}

{this.Thickness ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Density.Density : (this.shortVersion ? null : "Tetthet") }
    _value={this.Thickness}
    ></varsom-key-value>
    :""}

{this.Weight ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Density.Weight : (this.shortVersion ? null : "Vekt (g)") }
    _value={this.Weight}
    ></varsom-key-value>
    :""}

{this.WaterEquivalent ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.Density.WaterEquivalent : (this.shortVersion ? null : "Vannekv. (mm)") }
    _value={this.WaterEquivalent}
    ></varsom-key-value>
    :""}

    </div>
  }
    
  }

  
  
