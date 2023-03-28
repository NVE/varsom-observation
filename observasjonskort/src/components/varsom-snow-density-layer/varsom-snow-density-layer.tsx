import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-snow-density-layer',
  styleUrl: 'varsom-snow-density-layer.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomSnowDensityLayer {

  @Prop() strings: any;
  @Prop() Depth: any;
  @Prop() Thickness: any;
  @Prop() Weight: any;
  @Prop() WaterEquivalent: any;
  @Prop() SortOrder: any;

  render(){
    return <div> 

{this.Depth ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.DepthPlaceholder: "Dybde (cm)" }
    _value={this.Depth}
    ></varsom-key-value>
    :""}

{this.Thickness ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Density.Density: "Tetthet" }
    _value={this.Thickness}
    ></varsom-key-value>
    :""}

{this.Weight ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Density.Weight: "Vekt (g)" }
    _value={this.Weight}
    ></varsom-key-value>
    :""}

{this.WaterEquivalent ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.SnowProfile.Density.Weight: "Vannekv. (mm)" }
    _value={this.WaterEquivalent}
    ></varsom-key-value>
    :""}

    </div>
  }
    
  }

  
  
