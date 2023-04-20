import { Component, Prop, State, h } from '@stencil/core';


@Component({
  tag: 'varsom-image-slider',
  styleUrl: 'varsom-image-slider.css',
  shadow: true,
  assetsDirs: ['images']
})
export class VarsomImageSlider {

  @State() slideIndex: number = 1;
  @Prop() images: any[];  
  dataSource: any;

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
      for (i = 0; i < 3; i++){//slides.length; i++) {
        if (slides[i]){
        slides[i].style.display = 'none';
        }
      }
      for (i = 0; i < dots.length; i++) {
        //dots[i].className = dots[i].className.replace(" active", "");
      }
      if ( slides[this.slideIndex-1] != null)
        slides[this.slideIndex-1].style.display = "block";
      if ( slides[this.slideIndex] != null)
      slides[this.slideIndex].style.display = "block";
      //dots[this.slideIndex-1].className += " active";
    }
  
  
  
    async componentDidRender(){
      
        
        for (let j = 0; j < this.observationImages.length; j++){
          this.observationImages[j].style.display = "none";
      this.showSlides(this.slideIndex);
      
      }
    }


  render(){
    return <div>

....IMAGE SLIDER COMPONENT.....
{/* IMAGE SLIDER */}
{this.images.length > 0 ? 

  <div ref={(el) => this.observationImages[0] = el as HTMLElement} class="mySlides fade">
  
  <img class="observation-images" src={this.images[0]._imageData}></img>

  {this.images.length > 1 ? 
  <img class="observation-images" src={this.images[1]._imageData}></img>
: null}

</div> 
: null}

{this.images.length > 2 ? 

<div ref={(el) => this.observationImages[1] = el as HTMLElement} class="mySlides fade">
  
  <img class="observation-images" src={this.images[2]._imageData}></img>

  {this.images.length > 3 ? 
  <img class="observation-images" src={this.images[3]._imageData}></img>
: null}

</div> 
: null}



<a class="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</a>
  <a class="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</a>


</div>

    
  }

}
  
  
