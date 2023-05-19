import { Component, Prop, State, h } from '@stencil/core';
import { Observation } from '../varsom-observation/observation-model';


@Component({
  tag: 'varsom-image-slider',
  styleUrl: 'varsom-image-slider.css',
  shadow: false,
  assetsDirs: ['images']
})
export class VarsomImageSlider {

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

  plusSlides(n) {
    this.showSlides.bind(this, this.slideIndex += n);
  }
  
  // image slider:          source: w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
   currentSlide(n) {
    this.showSlides.bind(this, this.slideIndex = n);
  }
  
    showSlides(n: number){
    
      let i;
      let slides = this.observationImages;
      
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++){
        if (slides[i]){
        slides[i].style.display = 'none';
        }
      }
      for (i = 0; i < dots.length; i++) {
      }
      if ( slides[this.slideIndex-1] != null)
        slides[this.slideIndex-1].style.display = "block";
      if ( slides[this.slideIndex] != null)
      slides[this.slideIndex].style.display = "block";
    }
  

componentWillLoad(){
  this._loopNumbers = [];
for (let i = 0; i < this._images.length; i=i+2){
  this._loopNumbers.push(i);
}
}
  

   componentDidRender(){
      
        for (let j = 0; j < this.observationImages.length; j=j+2){
          this.observationImages[j].style.display = "none";
      this.showSlides(this.slideIndex);
      }
    }

    
  render(){
    return <div>





{this._loopNumbers.map((num) =>{
return <div class="slideshow-container">
   {this._images.length > num  ? 
  <div ref={(el) => this.observationImages[num] = el as HTMLElement} class="myslides fade">
    <div class="img-cont">
    <figure>
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


  {!this.shortVersion && num!== 0 ? 
  <figcaption>
  {this._images[num-1]._copyright ? 
    <div><b>{this.strings.Observations.Picture.Copyright}: </b> {this._images[num-1]._copyright} <br></br> </div> : "" }
    
    {this._images[num-1]._photographer ? 
     <div><b>{this.strings.Observations.Picture.Photographer}: </b> {this._images[num-1]._photographer} <br></br></div> : ""}
        
    {this._images[num-1]._comment ? 
        <div><b>{this.strings.Observations.Picture.PictureComment}: </b> {this._images[num-1]._comment} </div> : ""}

  </figcaption> : null}
</figure>


{/* OPEN IMAGE IN MODAL: SOURCE: https://www.w3schools.com/howto/howto_css_modals.asp */ }
{num !== 0 ? 
<div ref={(mod) => this.modal[num-1] = mod as HTMLElement}
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
<div ref={(mod) => this.modal[num] = mod as HTMLElement}
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
  <figure>
  <img alt={this._images[num]._comment ? this._images[num]._comment : "observation image"} class="observation-images" src={this._images[num+1]._imageData}
  onClick={()=> this.modal[num].style.display="block"}></img>
  {!this.shortVersion ? 
  <figcaption>
  {this._images[num]._copyright ? 
    <div><b>{this.strings.Observations.Picture.Copyright}: </b> {this._images[num]._copyright} <br></br> </div> : "" }
    
    {this._images[num]._photographer ? 
     <div><b>{this.strings.Observations.Picture.Photographer}: </b> {this._images[num]._photographer} <br></br></div> : ""}
        
    {this._images[num]._comment ? 
        <div><b>{this.strings.Observations.Picture.PictureComment}: </b> {this._images[num]._comment} </div> : ""}

  </figcaption>: null}
</figure>
  : null}  
</div>


{this._images.length > 2 ?
<div>
  <a class="prev" onClick={this.plusSlides.bind(this, -2)}>&#10094;</a>
<a class="next" onClick={this.plusSlides.bind(this, 2)}>&#10095;</a>
</div>
: null}

  </div>

 : null}

</div>
})}
    </div>
  }
}
  
  
