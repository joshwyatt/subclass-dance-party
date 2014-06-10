// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag

  this.$node = $('<div class="dancer"></div>');

  this.timeBetweenSteps = timeBetweenSteps;
  this.step();



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
  this.$node.draggable();
};

Dancer.prototype.lineUp = function(){
  this.setPosition('95%');
};

Dancer.prototype.findClosestNeighbor = function(){
  // store 'this' x and y coordinates
  // iterate through dancer array
    // find hyptenuse to each neighbor
  // store coordinates of dancer at smallest distance
  // return coordinates
  var myX = this.$node.position().left;
  var myY = this.$node.position().top;
  var dancerArray = window.dancers;
  var shortest,
      hypotenuse,
      shortestX,
      shortestY;
  for (var i = 0; i < dancerArray.length; i++){
    var neighborX = dancerArray[i].$node.position().left;
    var neighborY = dancerArray[i].$node.position().top;
    if (myX !== neighborX && myY !== neighborY){
      hypotenuse = this.findHypotenuse(myX, neighborX, myY, neighborY);
    }
    if (!shortest || hypotenuse < shortest){
      shortest = hypotenuse;
      shortestX = neighborX;
      shortestY = neighborY;
    }
  }
  return {
    top: shortestY,
    left: shortestX
  };
};

Dancer.prototype.findHypotenuse = function(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2));
};

Dancer.prototype.moveToward = function() {
  this.$node.animate(this.findClosestNeighbor(), 800);
};
