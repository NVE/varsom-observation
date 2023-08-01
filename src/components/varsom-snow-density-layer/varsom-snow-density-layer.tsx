import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;

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
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Density.Density : (this.shortVersion ? null : "Tetthet") }
    _value={this.Thickness}
    ></varsom-key-value>
    :""}

{this.Weight ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Density.Weight : (this.shortVersion ? null : "Vekt (g)") }
    _value={this.Weight}
    ></varsom-key-value>
    :""}

{this.WaterEquivalent ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.SnowProfile.Density.WaterEquivalent : (this.shortVersion ? null : "Vannekv. (mm)") }
    _value={this.WaterEquivalent}
    ></varsom-key-value>
    :""}

    </div>
  }
    
  }

  
  
