import { Component, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'varsom-image-slider',
  styleUrl: 'varsom-image-slider.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomImageSlider {

  @State() slideIndex: number = 1;
  @Prop() _images: any[];  
  dataSource: any;
  _loopNumbers: number[];
  @Prop() strings: any;

  observationImages: HTMLElement[] = [];

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
   {this._images.length > num ? 
  <div ref={(el) => this.observationImages[num] = el as HTMLElement} class="mySlides fade">
  <img class={this._images.length == 1 ? "observation-images first" : "observation-images"}  src={this._images[num]._imageData}></img>

  {this._images.length > num+1 ? 
  <img class="observation-images" src={this._images[num+1]._imageData}></img>
  : null}  

 <div class="image-info-container">
    <span class={this._images.length == 1 ? "imageInfo firstInfo" : "imageInfo"}> 
    
    {this._images[num]._copyright ? 
    <div><b>{this.strings.Observations.Picture.Copyright}: </b> {this._images[num]._copyright} <br></br> </div> : "" }
    
    {this._images[num]._photographer ? 
     <div><b>{this.strings.Observations.Picture.Photographer}: </b> {this._images[num]._photographer} <br></br></div> : ""}
        
    {this._images[num]._comment ? 
        <div><b>{this.strings.Observations.Picture.PictureComment}: </b> {this._images[num]._comment} </div> : ""}

    </span> 

    {this._images.length > num+1 ? 
    <span class="imageInfo"> 
    
    {this._images[num+1]._copyright ? 
    <div><b>{this.strings.Observations.Picture.Copyright}: </b> {this._images[num+1]._copyright} <br></br> </div> : "" }
    
    {this._images[num+1]._photographer ? 
     <div><b>{this.strings.Observations.Picture.Photographer}: </b> {this._images[num+1]._photographer} <br></br></div> : ""}
        
    {this._images[num+1]._comment ? 
        <div><b>{this.strings.Observations.Picture.PictureComment}: </b> {this._images[num+1]._comment} </div> : ""}

    </span> 
    : null }

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
  
  
