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

    this.leftBtn.addEventListener("click", () => this.goLeft());
    this.rightBtn.addEventListener("click", () => this.goRight());
  }
  goLeft() {
    this.imgs[this.index].style.display = "none";
    this.index === 0 ? (this.index = this.imgs.length - 1) : this.index--; //jshint ignore: line

    this.imgs[this.index].style.display = "block";
  }

  goRight() {
    this.imgs[this.index].style.display = "none";
    this.index === this.imgs.length - 1 ? (this.index = 0) : this.index++; //jshint ignore: line
    this.imgs[this.index].style.display = "block";
  }
}

let carousels = document.querySelectorAll(".carousel img");
console.log(carousels);

carousels.forEach(sel => new Carousel(sel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
