import { Component, Prop, h } from '@stencil/core';
import { AvalancheEvalProblem } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-avalanche-evaluation',
  styleUrl: 'varsom-avalanche-evaluation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheEvaluation {

  @Prop() strings: any;
  @Prop() RegID: any;
  @Prop() CanPublish: any;
  @Prop() AvalancheDangerTID: any;
  @Prop() AvalancheDangerName: any;
  @Prop() ValidExposition: any;
  @Prop() ValidHeightRelative: any;
  @Prop() ValidHeightFrom: any;
  @Prop() ValidHeigtTo: any;
  @Prop() AvalancheProblemTID1: any;
  @Prop() AvalancheProblemName1: any;
  @Prop() AvalancheProblemTID2: any;
  @Prop() AvalancheProblemName2: any;
  @Prop() AvalancheProblemTID3: any;
  @Prop() AvalancheProblemName3: any;
  @Prop() AvalancheEvaluation1: any;
  @Prop() Comment: any;


  render(){
    return <div> 

      {this.RegID ? 
      <span>
      <label>Label mangler: </label>
      {this.RegID}
      </span> : ""}

      {this.CanPublish ? 
      <span>
      <label>Label mangler: </label>
      {this.CanPublish}
      </span> : ""}

      {this.AvalancheDangerTID ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDangerTID}
      </span> : ""}

      {this.RegID ? 
      <span>
      <label>Label mangler: </label>
      {this.RegID}
      </span> : ""}

      {this.AvalancheDangerName ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheDangerName}
      </span> : ""}

      {this.ValidExposition ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidExposition}
      </span> : ""}

      {this.ValidHeightRelative ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidHeightRelative}
      </span> : ""}

      {this.ValidHeightFrom ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidHeightFrom}
      </span> : ""}

      {this.ValidHeigtTo ? 
      <span>
      <label>Label mangler: </label>
      {this.ValidHeigtTo}
      </span> : ""}

      {this.AvalancheProblemTID1 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemTID1}
      </span> : ""}

      {this.AvalancheProblemName1 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemName1}
      </span> : ""}

      {this.AvalancheProblemTID2 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemTID2}
      </span> : ""}

      {this.AvalancheProblemName2 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemName2}
      </span> : ""}

      {this.AvalancheProblemTID3 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemTID3}
      </span> : ""}

      {this.AvalancheProblemName3 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheProblemName3}
      </span> : ""}

      {this.AvalancheEvaluation1 ? 
      <span>
      <label>Label mangler: </label>
      {this.AvalancheEvaluation1}
      </span> : ""}

      {this.Comment ? 
      <span>
      <label>Label mangler: </label>
      {this.Comment}
      </span> : ""}

    
    </div>
  }
    
  }

  
  
