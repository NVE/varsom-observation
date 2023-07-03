import { Component, Prop, State, h } from '@stencil/core';
import { Observation } from '../varsom-observation/observation-model';
// import function to register Swiper custom elements
import { register } from '../../../node_modules/swiper/element/swiper-element';
// register Swiper custom elements
register();

@Component({
  tag: 'varsom-image-slider-mobile',
  styleUrl: 'varsom-image-slider-mobile.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomImageSliderMobile {

  @State() slideIndex: number = 1;
  @Prop() _images: any[];  
  dataSource: any;
  _loopNumbers: number[];
  @Prop() strings: any;
  @Prop() shortVersion: string;
  @Prop() observation: Observation;

  observationImages: HTMLElement[] = [];
  modal: HTMLElement[] = [];
  closeBtn: HTMLElement[] = [];

  

componentWillLoad(){
  this._loopNumbers = [];
for (let i = 0; i < this._images.length; i++){
  this._loopNumbers.push(i);
}
}
  

    
  render(){
    return <div>

<swiper-container class="swipe-container" slides-per-view="1" grid-rows="1" speed="500" loop="true" css-mode="true">

{/**
<swipe-slide>
    <div class="map-container">
    <varsom-static-map
    observation={this.observation}
    allowZoom={true}
    small={true}
 ></varsom-static-map>
</div>
</swipe-slide>
     */} 



{this._loopNumbers.map((num) =>{
return <div class="slideshow-container">


<swiper-slide>
  <div ref={(el) => this.observationImages[num] = el as HTMLElement} class="myslides fade">
    <div class="img-cont">
    <figure tabIndex={0}>

     
     <img alt={this._images[num]._comment ? this._images[num]._comment : "observation image"} class="observation-images" src={this._images[num]._imageData}
  onClick={()=> this.modal[num-1].style.display="block"}></img>


</figure>



</div>


  </div>
  </swiper-slide>  


 

</div>



})}


</swiper-container>

    </div>
  }
}
  
  
