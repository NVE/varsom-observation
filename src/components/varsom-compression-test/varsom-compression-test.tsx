import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-compression-test',
  styleUrl: 'varsom-compression-test.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomCompressionTest {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() CompressionTestTID: any;
  @Prop() CompressionTestName: any;
  @Prop() TapsFracture: any;
  @Prop() TapsFullPropagation: any;
  @Prop() PropagationTID: any;
  @Prop() PropagationName: any;
  @Prop() FractureDepth: any;
  @Prop() PstX: any;
  @Prop() PstY: any;
  @Prop() RbRelease: any;
  @Prop() StabilityEvalTID: any;
  @Prop() StabilityEvalName: any;
  @Prop() ComprTestFractureTID: any;
  @Prop() ComprTestFractureName: any;
  @Prop() IncludeInSnowProfile: any;
  @Prop() Comment: any;
  @Prop() Attachments: Attachment[];


  render(){
    return <div class="container">
    <div class="parent"> 
{/* TODO: se regobs-kode for visning av tabell.... */ } 
    
    {this.PropagationName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.CompressionTest.Test : (this.shortVersion ? null : "Test") }
    _value={this.PropagationName}
    ></varsom-key-value>
    :""}
    
    {this.StabilityEvalName ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.CompressionTest.StabilityEvalTID : (this.shortVersion ? null : "Stabilitet") }
    _value={this.StabilityEvalName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.CompressionTest.Comment : (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
  
  </div>
  {this.Attachments ? 
      <span class="attachments-container">
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </span> : ""}

    </div>

    
  }
    
  }

  
  