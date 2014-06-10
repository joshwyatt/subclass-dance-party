var SchizoDancer = function(top, left, timeBetweenSteps){

  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = this.step;
  // this.step = function(){
  //   this.oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  // };
};

SchizoDancer.prototype = Object.create(BlinkyDancer.prototype);
SchizoDancer.prototype.constructor = SchizoDancer;
SchizoDancer.prototype.step = function(){
  BlinkyDancer.prototype.step.call(this);
  this.$node.toggleClass('schizo');
};
