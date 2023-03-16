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
  @Prop() comment: any;


  render(){
    return <div> 

      {this.CompressionTestName ? 
      <span>
      <label>Label mangler: </label>
      {this.CompressionTestName}
      </span> : ""}

      {this.CompressionTestTID ? 
      <span>
      <label>Label mangler: </label>
      {this.CompressionTestTID}
      </span> : ""}

      {this.TapsFracture ? 
      <span>
      <label>Label mangler: </label>
      {this.TapsFracture}
      </span> : ""}

      {this.TapsFullPropagation ? 
      <span>
      <label>Label mangler: </label>
      {this.TapsFullPropagation}
      </span> : ""}

      {this.PropagationTID ? 
      <span>
      <label>Label mangler: </label>
      {this.PropagationTID}
      </span> : ""}

      {this.PropagationName ? 
      <span>
      <label>Label mangler: </label>
      {this.PropagationName}
      </span> : ""}

      {this.FractureDepth ? 
      <span>
      <label>Label mangler: </label>
      {this.FractureDepth}
      </span> : ""}

      {this.PstX ? 
      <span>
      <label>Label mangler: </label>
      {this.PstX}
      </span> : ""}

      
      {this.PstY ? 
      <span>
      <label>Label mangler: </label>
      {this.PstY}
      </span> : ""}

      {this.RbRelease ? 
      <span>
      <label>Label mangler: </label>
      {this.RbRelease}
      </span> : ""}

      {this.StabilityEvalTID ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.StabilityEvalTID} </label>
      {this.StabilityEvalTID}
      </span> : ""}

      {this.StabilityEvalName ? 
      <span>
      <label>Label mangler: </label>
      {this.StabilityEvalName}
      </span> : ""}

      {this.ComprTestFractureTID ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Type} </label>
      {this.ComprTestFractureTID}
      </span> : ""}

      {this.ComprTestFractureName ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Test} </label>
      {this.ComprTestFractureName}
      </span> : ""}

      
      {this.IncludeInSnowProfile ? 
      <span>
      <label>Label mangler: </label>
      {this.IncludeInSnowProfile}
      </span> : ""}
      

      {this.comment ? 
      <span>
      <label>{this.strings.Observations.CompressionTest.Comment}: </label>
      {this.comment}
      </span> : ""}

     
    
    
    </div>
  }
    
  }

  
  
