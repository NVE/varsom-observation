import { Component, Prop, h } from '@stencil/core';
import { Attachment, WaterLevelMeasurement } from '../varsom-observasjon/observation-model';


@Component({
  tag: 'varsom-water-level2',
  styleUrl: 'varsom-water-level2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomWaterLevel2 {

  @Prop() strings: any;
  @Prop() shortVersion: any;
  @Prop() Comment: any;
  @Prop() WaterAstrayName: any;
  @Prop() WaterLevelStateName: any;
  @Prop() ObservationTimingName: any;
  @Prop() MeasurementReferenceName: any;
  @Prop() WaterLevelMethodName: any;
  @Prop() MeasurementTypeName: any;
  @Prop() MarkingReferenceName: any;
  @Prop() MarkingTypeName: any;
  @Prop() WaterLevelMeasurement: WaterLevelMeasurement[];
  @Prop() WaterAstrayTID: any;
  @Prop() ObservationTimingTID: any;
  @Prop() MeasurementReferenceTID: any;
  @Prop() MeasurementTypeTID: any;
  @Prop() WaterLevelMethodTID: any;
  @Prop() MarkingReferenceTID: any;
  @Prop() WaterLevelStateTID: any;
  @Prop() MarkingTypeTID: any;
  @Prop() MeasuringToolDescription: any;
  @Prop() Attachments: Attachment[];
   
  render(){
    return <div class="container"> 


<varsom-label
label={this.strings ? this.strings.Observations.WaterLevel.ObsName : "Vannstand"}
></varsom-label>
     
<div class="content">


{this.WaterLevelStateName ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.WaterLevelStateTName: (this.shortVersion ? null : "Situasjon") }
    _value={this.WaterLevelStateName}
    ></varsom-key-value>
    :""}


{this.WaterAstrayName ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.WaterAstrayTName: (this.shortVersion ? null : "Vann på avveie") }
    _value={this.WaterAstrayName}
    ></varsom-key-value>
    :""}

{this.ObservationTimingName ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.ObservationTimingTName: (this.shortVersion ? null : "Hva registrerer du?") }
    _value={this.ObservationTimingName}
    ></varsom-key-value>
    :""}


{this.MeasurementTypeName ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.MeasurementTypeTName: (this.shortVersion ? null : "Måleinstrument") }
    _value={this.MeasurementTypeName + ", " + (this.MeasuringToolDescription ? this.MeasuringToolDescription : "")}
    ></varsom-key-value>
    :""}

{this.MeasurementReferenceName ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.MeasuredRelativeTo: (this.shortVersion ? null : "Måling relativt til") }
    _value={this.MeasurementReferenceName}
    ></varsom-key-value>
    :""}

{this.MeasurementReferenceTID ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.MeasurementReferenceTName: (this.shortVersion ? null : "Vannmarkering på/i") }
    _value={this.MarkingReferenceName + (this.strings ? this.strings.Observations.WaterLevel2.With : " med ") + 
  (this.MarkingTypeName ? this.MarkingTypeName : "")}
    ></varsom-key-value>
    :""}

<br></br>
{this.Comment ?
    <varsom-key-value
    _key={this.strings && !this.shortVersion ? this.strings.Observations.WaterLevel2.Comment: (this.shortVersion ? null : "Kommentar") }
    _value={this.Comment}
    ></varsom-key-value>
    :""}


{this.WaterLevelMeasurement ? 
      <div>
      {this.WaterLevelMeasurement.map((el: WaterLevelMeasurement = {}) =>{
            return <varsom-water-measurement
            strings={this.strings}
            shortVersion={this.shortVersion ? this.shortVersion : null}
            Comment={el.Comment}
            DtMeasurementTime={el.DtMeasurementTime}
            WaterLevelValue={el.WaterLevelValue}
            >

            </varsom-water-measurement>
        })
        } </div> : ""}

</div>

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

  
  
