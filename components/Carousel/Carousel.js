// class constructor here
class Carousel {
  constructor(sel) {
    // set this binding
    this.sel = sel;

    //get DOM referencs
    this.leftBtn = document.querySelector(".left-button");
    this.rightBtn = document.querySelector(".right-button");
    this.imgs = document.querySelectorAll(".carousel img");
    //console.log(this.imgs);
    this.index = 0;
    this.imgs[this.index].style.display = "block";

    // eventlistener for left and right buttons
    this.leftBtn.addEventListener("click", () => this.goLeft());
    this.rightBtn.addEventListener("click", () => this.goRight());
  }
  // methods to scroll through the nodelist of the images
  goLeft() {
    // sets the display back to none before showing the next img
    this.imgs[this.index].style.display = "none";
    // if img index is 0 then index is end img of nodelist otherwise got to
    // next lowest index
    this.index === 0 ? (this.index = this.imgs.length - 1) : this.index--; //jshint ignore: line

    // display selected image
    this.imgs[this.index].style.display = "block";
  }

  goRight() {
    // sets display back to none before showing next img
    this.imgs[this.index].style.display = "none";
    // check img index, if it's the last in the nodelist sets it to 0
    // otherwise increments by one.
    this.index === this.imgs.length - 1 ? (this.index = 0) : this.index++; //jshint ignore: line
    // displays img at current index
    this.imgs[this.index].style.display = "block";
  }
}

// select imgs and store them in variable
let carousels = document.querySelectorAll(".carousel img");

//console.log(carousels);

//loop through them and create a new img see top of file for class
carousels.forEach(sel => new Carousel(sel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
