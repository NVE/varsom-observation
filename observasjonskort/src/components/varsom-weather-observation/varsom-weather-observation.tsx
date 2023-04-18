import { Component, Prop, h } from '@stencil/core';
import { Attachment } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-weather-observation',
  styleUrl: 'varsom-weather-observation.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWeatherObservation {

  @Prop() strings: any;
  @Prop() PrecipitationName: any;
  @Prop() WindDirectionName: any;
  @Prop() PrecipitationTID: any;
  @Prop() AirTemperature: any;
  @Prop() WindDirection: any;
  @Prop() WindSpeed: any;
  @Prop() CloudCover: any;
  @Prop() Comment: any;
  @Prop() Attachments?: Attachment[];
  
  
  
  render(){
    return <div class="container"> 

{this.PrecipitationName ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.PrecipitationTID: "Nedbørstype" }
    _value={this.PrecipitationName}
    ></varsom-key-value>
    :""}

{this.AirTemperature ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.AirTemperature: "Lufttemperatur (°C)" }
    _value={this.AirTemperature}
    ></varsom-key-value>
    :""}

{(this.WindDirection && this.WindSpeed) ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.Wind: "Vind" }
    _value={this.WindSpeed + " " + this.WindDirection}
    ></varsom-key-value>
    :""}
    

{(this.WindDirection && !this.WindSpeed) ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.WindDirection: "Vindretning" }
    _value={this.WindDirection}
    ></varsom-key-value>
    :""}

{(!this.WindDirection && this.WindSpeed) ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.WindSpeed: "Vindhastighet (m/s)" }
    _value={this.WindSpeed}
    ></varsom-key-value>
    :""}
    

{this.CloudCover ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.CloudCover: "Skydekke" }
    _value={this.CloudCover}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ?
    <varsom-key-value
    _key={this.strings ? this.strings.Observations.WeatherObservation.Comment: "Kommentar" }
    _value={this.Comment}
    ></varsom-key-value>
    :""}

{this.Attachments ? 
      <div>
      {this.Attachments.map((el: Attachment = {}) =>{
            return <varsom-attachment
            Photographer={el.Photographer ? el.Photographer : null}            
            Comment={el.Comment ? el.Comment : null}
            Url={el.Url ? el.Url : null}
            Copyright={el.Copyright ? el.Copyright : null}
            >

            </varsom-attachment>
        })
        } </div> : ""}

    </div>
  }
    
  }

  
  
