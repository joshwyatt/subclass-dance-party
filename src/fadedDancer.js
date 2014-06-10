var FadedDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.step = function(){
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.fadeToggle();
  };
};

FadedDancer.prototype = Object.create(Dancer.prototype);

FadedDancer.prototype.constructor = FadedDancer;
