var ColorChangeDancer = function(top, left, timeBetweenSteps) {
  FadedDancer.call(this, top, left, timeBetweenSteps);
};

ColorChangeDancer.prototype = Object.create(FadedDancer.prototype);
ColorChangeDancer.prototype.constructor = ColorChangeDancer;

ColorChangeDancer.prototype.step = function() {
  FadedDancer.prototype.step.call(this);
  this.$node.toggleClass('colorChange');
};

