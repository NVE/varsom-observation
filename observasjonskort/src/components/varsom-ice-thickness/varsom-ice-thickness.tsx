import { Component, Prop, h } from '@stencil/core';
import { IceThicknessLayer } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-ice-thickness',
  styleUrl: 'varsom-ice-thickness.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomIceThickness {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() IceThicknessLayers: IceThicknessLayer[];
  @Prop() SnowDepth: any;
  @Prop() SlushSnow: any;
  @Prop() IceThicknessSum: any;
  @Prop() IceHeightBefore: any;
  @Prop() IceHeightAfter: any;


  render(){
    return <div> 

{/* TODO: IMPLEMENT PICTURE */}

      <varsom-label
      label={this.strings ? this.strings.Observations.IceThickness.ObsName : "Istykkelse"}
      ></varsom-label>

      {this.IceThicknessLayers ? 
      <div>
      {this.IceThicknessLayers.map((el: IceThicknessLayer = {}) =>{
            return <varsom-ice-thickness-layer
            strings={this.strings}
            Comment={el.Comment ? el.Comment : null}
            IceLayerName={el.IceLayerName ? el.IceLayerName : null}
            IceLayerThickness={el.IceLayerThickness ? el.IceLayerThickness : null}          
            >

            </varsom-ice-thickness-layer>
        })
        } </div> : ""}

    {this.SnowDepth ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.SnowDepthBeforeDrilling: "Snødybde før boring" }
    _value={this.SnowDepth + " cm"}
    ></varsom-key-value>
    :""}

    {this.SlushSnow ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.SlushSnowBeforeDrilling : "Sørpe før boring" }
    _value={this.SlushSnow + " cm"}
    ></varsom-key-value>
    :""}

    {(this.IceHeightBefore && this.IceHeightBefore <= 0 ) ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.IceHeightBeforeInput : "Overvannets tykkelse" }
    _value={((this.IceHeightBefore) * 100 * -1) + " cm"}
    ></varsom-key-value>
    :""}

    {(this.IceHeightAfter && this.IceHeightAfter > 0)? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.IceHeightAfterInput : "Overvannets tykkelse" }
    _value={(this.IceHeightAfter) * 100 + " cm"}
    ></varsom-key-value>
    :""}

    {(this.IceHeightAfter && this.IceHeightAfter === 0)? 
    <varsom-key-value
    _key={this.IceHeightAfter}
    _value={this.strings ? this.strings.Observations.IceThickness.IsEqualToIceSurface : "er likt med isoverflaten"}
    ></varsom-key-value>
    :""}

    {(this.IceHeightAfter && this.IceHeightAfter < 0)? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.IceHeightAfterInput : "Overvannets tykkelse" }
    _value={((this.IceHeightAfter) * 100 * -1) + " cm" + this.strings ? this.strings.Observations.IceThickness.LowerThanIceSurface : "lavere enn isoverflaten"}
    ></varsom-key-value>
    :""}

    {this.IceThicknessSum  ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.Total : "Total istykkelse" }
    _value={this.IceThicknessSum}
    ></varsom-key-value>
    :""}


    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.IceThickness.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

    </div>



  }
    
  }

  
  
