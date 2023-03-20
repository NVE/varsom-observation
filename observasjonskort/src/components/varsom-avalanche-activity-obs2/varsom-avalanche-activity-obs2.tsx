import { Component, Prop, h } from '@stencil/core';


@Component({
  tag: 'varsom-avalanche-activity-obs2',
  styleUrl: 'varsom-avalanche-activity-obs2.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomAvalancheActivityObs2 {

  @Prop() strings: any;
  @Prop() Comment: any;
  @Prop() AvalCauseName: any;
  @Prop() DtStart: any;
  @Prop() EstimatedNumName: any;
  @Prop() ExposedHeightComboName: any;
  @Prop() AvalancheExtName: any;
  @Prop() AvalTriggerSimpleName: any;
  @Prop() DestructiveSizeName: any;
  @Prop() AvalPropagationName: any;
  @Prop() EstimatedNumTID: any;
  @Prop() DtEnd: any;
  @Prop() ValidExposition: any;
  @Prop() ExposedHeight1: any;
  @Prop() ExposedHeight2: any;
  @Prop() ExposedHeightComboTID: any;
  @Prop() AvalancheExtTID: any;
  @Prop() AvalCauseTID: any;
  @Prop() AvalTriggerSimpleTID: any;
  @Prop() DestructiveSizeTID: any;
  @Prop() AvalPropagationTID: any;
 
  
  render(){
    return <div> 

    {(this.DtStart && this.DtEnd) ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs2.DtAvalancheTime}: </div>
        : <div>Tid: </div>}
        </label>
    {this.DtStart} - {this.DtEnd}
    </div>
      : ""} 

     {this.EstimatedNumTID ? 
        <div class="header">
        {this.strings ? 
      <div>{this.strings.Observations.AvalancheActivityObs2.NumberAndSizeAndTrigger}: </div>
         : "Antall, størrelse og skredutløser" 
        } </div> 
     : "" }
       
       {this.EstimatedNumName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheActivityObs.HowManyAvalanches}: </div>
        : <div>Antall skred: </div>}
        </label>
    {this.EstimatedNumName}
    </div>
      : ""} 

    {this.DestructiveSizeName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheEvalProblem2.DestructiveSizeTID}: </div>
        : <div>Størrelse på forventet skred: </div>}  {/* correct? */ }
        </label>
    {this.DestructiveSizeName}
    </div>
      : ""} 

    {this.AvalTriggerSimpleName ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheEvalProblem2.AvalTriggerSimpleTID}: </div>
        : <div>Sannsynlig belasting for å løse ut skred: </div>}  {/* correct? */ }
        </label>
    {this.AvalTriggerSimpleName}
    </div>
      : ""} 

    {this.AvalPropagationTID ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheProblem.AvalancheProblem}: </div>
        : <div>Utbredelse: </div>}  {/* correct? */ }
        </label>
    {this.AvalPropagationTID}
    </div>
      : ""} 

    {this.Comment ? 
      <div>
      <label>
        {this.strings ? 
        <div>{this.strings.Observations.AvalancheProblem.Comment}: </div>
        : <div>Kommentar: </div>}
        </label>
    {this.Comment}
    </div>
      : ""} 
       
        
        
  {/* TODO: IMPLEMENT SVG IMAGE */}
      
     

      

    
    </div>
  }
    
  }

  
  
