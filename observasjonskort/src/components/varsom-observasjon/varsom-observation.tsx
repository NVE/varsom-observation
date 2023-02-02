import { Component, Prop, h, State } from '@stencil/core';
import { format, getDataFromApiByTypeAndNumber } from '../../utils/utils';
import { getDataFromApiById } from '../../utils/utils';

@Component({
  tag: 'varsom-observation',
  styleUrl: 'varsom-observation.css',
  shadow: true,
})
export class VarsomObservation {

  @State() regId: string;
  @State() moh: number;
  @State() imageUrl: string;
  @State() numberOfObservations: number;
 
  @Prop() id: string;

  
  @Prop() type: string;

 
  @Prop() number: number = 1;

  componentDidLoad(){
    if (this.id !== undefined){ //if id is sent to component, it will only show this observation
    getDataFromApiById(this.id)
    .then((data => {
      
      this.regId = data["RegId"];
      this.moh = data["ObsLocation"]["Height"];
      this.imageUrl = data["Attachments"][0]["Url"];
      


      //etc
      //etc

    }));
  }

  if (this.type !== undefined){
    getDataFromApiByTypeAndNumber(this.type, this.number).then((data => {
      this.regId = data["RegId"];
      this.moh = data["ObsLocation"]["Height"];
      this.imageUrl = data["Attachments"][0]["Url"];
    }));
  }

  }


  

 
    private getText(): string {
      return <div>id : {this.id}, type: {this.type}, number: {this.number} </div>;
    }
  
    render() {
      return <div class="observation-container"> 
      <div class="observation-header">
        <h1>Region region</h1>
        <b>ID: ...</b></div>
      
      <div class="observation-metadata">
        Observert 10.5.2023. 06:50 Registrert 10.5.23. 09:15
         Oppdatert 10.5.23 09:15
         <br></br>
         Ikon faretype ... ikon moh {this.moh}  .... 
         bruker brukerRating..... SvvDrift???
      </div>
      <div class="observation-image-container">
        <img alt="comment..." class="observation-image" src={this.imageUrl}></img>
        <img alt="comment..." class="observation-image" src={this.imageUrl}></img>
        <br></br>
        <b>Opphavsrett:</b> nve@nve.no <br></br>
        <b>Fotograf:</b> fotograf... <br></br>
        <b>Kommentar:</b> Statens vegvesen...
      </div>

      <div class="observation-content">
        <h2>Faretegn</h2>
        <b>Type: </b> Overvann i terreng <b>Kommentar: 
           </b> ... 
           Område: På dette stedet. Beskrivelse: Det renner vann 
          overalt
        <br></br>
        type... kommentar....

        <h2>Skredhendelse</h2>
        <b>Tid: </b>Mellom tidspunkt og tidspunkt... <b>Skredtype: </b>flomskred
         <b> Størrelse: </b> 100m3
         <br></br>
         <b>Trigger: </b>Graving i området <b>Omfang: </b>trafikk hindret
         <br></br>
         <b>Stemte varsel på varsom.no? </b> varsel ikke kjent
         <b>Kommentar: </b>her er ytterligere beskrivelse av hendelsen

         <h2>Notater</h2>
         <b>Tekst: </b>enda mer beskrivelse under "notat"

      </div>

      </div>
      
    }
}
