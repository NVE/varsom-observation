import { Component, Prop, State, h } from '@stencil/core';


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

  observationImages: HTMLElement[] = [];
  modal: HTMLElement[] = [];
  closeBtn: HTMLElement[] = [];

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  
  // image slider:          source: w3schools: https://www.w3schools.com/howto/howto_js_slideshow.asp
   currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  
    showSlides(n: number){
    
    //if (this.observationImages[n] != null)
      //this.checkSwipe.bind(this, this.observationImages[n]);
      let i;
      let slides = this.observationImages;
      
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {this.slideIndex = 1}
      if (n < 1) {this.slideIndex = slides.length}
      for (i = 0; i < slides.length; i++){
        if (slides[i]){
          
        //slides[i].style.display = 'none';
        }
      }
      for (i = 0; i < dots.length; i++) {
      }
      if (slides[this.slideIndex-1] != null)
        slides[this.slideIndex-1].style.display = "block";
     // if (slides[this.slideIndex] != null)
      //slides[this.slideIndex].style.display = "block";
    }
  

componentWillLoad(){

  this._loopNumbers = [];
for (let i = 0; i < this._images.length; i++){
  this._loopNumbers.push(i);
}
}
  

checkSwipe(elem: HTMLElement){ //source: https://pantaley.com/blog/How-to-separate-Drag-and-Swipe-from-Click-and-Touch-events/
  let isSwiping = false;

  elem.addEventListener('mousedown', () => {
    isSwiping = false;
  });
  
  elem.addEventListener('mousemove', () => {
    isSwiping = true;
  });
  
  elem.addEventListener('mouseup', e => {
    if (this && e.button === 0) {
      console.log('dragging');
      if (this.observationImages.length > 1){
      this.plusSlides(1);
      }
    } else {
      console.log('not dragging');
    }
  
    isSwiping = false;
  });
  
  elem.addEventListener('touchstart', () => {
    isSwiping = false;
  });
  
  elem.addEventListener('touchmove', () => {
    isSwiping = true;
  });
  
  elem.addEventListener('touchend', e => {
    e.preventDefault();
  
    if (isSwiping) {
      console.log('swiping');
    } else {
      console.log('not swiping');
    }
  
    isSwiping = false;
  });
}

   componentDidRender(){
    
    if (this.observationImages.length > 0){
      
        for (let j = 0; j < this.observationImages.length; j++){
          this.observationImages[j].style.display = "none";
          
      this.showSlides(1);
      
      }
    }
  
    }

    
  render(){
    return <div>





{this._loopNumbers.map((num) =>{
return <div class="slideshow-container">
   {this._images.length > num ? 
  <div ref={(el) => this.observationImages[num] = el as HTMLElement} class="myslides fade">
    <div class="img-cont">
    <figure>
  <img alt={this._images[num]._comment ? this._images[num]._comment : "observation image"} class="observation-images" src={this._images[num]._imageData}
   onClick={this.checkSwipe.bind(this, this.observationImages[num])}
  ></img>



  {!this.shortVersion ? 
  <figcaption>
  {this._images[num]._copyright ? 
    <div><b>{this.strings.Observations.Picture.Copyright}: </b> {this._images[num]._copyright} <br></br> </div> : "" }
    
    {this._images[num]._photographer ? 
     <div><b>{this.strings.Observations.Picture.Photographer}: </b> {this._images[num]._photographer} <br></br></div> : ""}
        
    {this._images[num]._comment ? 
        <div><b>{this.strings.Observations.Picture.PictureComment}: </b> {this._images[num]._comment} </div> : ""}

  </figcaption> : null}
</figure>
   
</div>


  </div>

 : null}

</div>
})}
    </div>
  }
}
  
  
