import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { getDataFromApiById } from '../../utils/utils';

@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
})
export class VarsomObservation {

  @State() regId: string;
  @State() moh: number;
 
  @Prop() id: string;

  
  @Prop() type: string;

 
  @Prop() number: string;

  componentDidLoad(){
    if(this.id !== undefined){ //if id is sent to component, it will only show this observation
    getDataFromApiById(this.id)
    .then((data => {
      
      this.regId = data["RegId"];
      this.moh = data["ObsLocation"]["Height"];

      //etc
      //etc

    }));
  }
  }
  

 
    private getText(): string {
      return <div>id : {this.id}, type: {this.type}, number: {this.number} </div>;
    }
  
    render() {
      return <div class="observation-container"> 
      <div class="observation-header">
        <b>Region region</b>
        <b>ID: ...</b></div>
      
      </div>;
        
      
    }
}
