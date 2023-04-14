import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-compression-test',
  styleUrl: 'varsom-compression-test.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomCompressionTest {

  @Prop() strings: any;
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


  render(){
    return <div class="container">
    <div class="parent"> 
{/* TODO: se regobs-kode for visning av tabell.... */ } 
    
    {this.PropagationName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.CompressionTest.Test : "Test" }
    _value={this.PropagationName}
    ></varsom-key-value>
    :""}
    
    {this.StabilityEvalName ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.CompressionTest.StabilityEvalTID : "Stabilitet" }
    _value={this.StabilityEvalName}
    ></varsom-key-value>
    :""}

<br></br>
    {this.Comment ? 
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.CompressionTest.Comment : "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}
  

    </div>

    </div>
  }
    
  }

  
  
