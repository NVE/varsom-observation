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
for (let i = 0; i < this._images.length; i=i+2){
  this._loopNumbers.push(i);
}
}
  

    
  render(){
    return <div>

<swiper-container class="nirm" slides-per-view="1" grid-rows="1" speed="500" loop="true" css-mode="true">






{this._loopNumbers.map((num) =>{
return <div class="slideshow-container">




   {this._images.length > num  ? 
    

<swiper-slide>
  <div ref={(el) => this.observationImages[num] = el as HTMLElement} class="myslides fade">
    <div class="img-cont">
    <figure tabIndex={0}>
     {num == 0 ?  
    
    <varsom-static-map
    observation={this.observation}
    allowZoom={true}
    small={true}
 ></varsom-static-map>
     : 
     
     <img alt={this._images[num]._comment ? this._images[num-1]._comment : "observation image"} class="observation-images" src={this._images[num]._imageData}
  onClick={()=> this.modal[num-1].style.display="block"}></img>

     }


</figure>


{/* OPEN IMAGE IN MODAL: SOURCE: https://www.w3schools.com/howto/howto_css_modals.asp */ }
{num !== 0 ? 
<div tabIndex={0} ref={(mod) => this.modal[num-1] = mod as HTMLElement}
 class="modal">


  <div class="modal-content">
    
    <span class="close" ref={(close) => this.closeBtn[num-1] = close as HTMLElement}
     onClick={() => this.modal[num-1].style.display = "none"}
     >&times;
    </span>
  
    <img src={this._images[num-1]._imageData} class="modal-img"></img>
  </div>

</div>
: null }

{this._images.length > num +1 ? 
<div tabIndex={0} ref={(mod) => this.modal[num] = mod as HTMLElement}
 class="modal">


  <div class="modal-content">
    
    <span class="close" ref={(close) => this.closeBtn[num] = close as HTMLElement}
     onClick={() => this.modal[num].style.display = "none"}
     >&times;
    </span>
  
    <img src={this._images[num]._imageData} class="modal-img"></img>
  </div>

</div>
: null}
   
  {this._images.length > num+1 ? 
  <figure tabIndex={0}>
  <img alt={this._images[num]._comment ? this._images[num]._comment : "observation image"} class="observation-images" src={this._images[num+1]._imageData}
  onClick={()=> this.modal[num].style.display="block"}></img>

</figure>
  : null}  
</div>


  </div>
  </swiper-slide>  
 : null}

 

</div>



})}


</swiper-container>

    </div>
  }
}
  
  
