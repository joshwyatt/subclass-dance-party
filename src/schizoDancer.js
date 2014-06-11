var SchizoDancer = function(top, left, timeBetweenSteps){

  FadedDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = this.step;
  // this.step = function(){
  //   this.oldStep();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  // };
};

SchizoDancer.prototype = Object.create(FadedDancer.prototype);
SchizoDancer.prototype.constructor = SchizoDancer;
SchizoDancer.prototype.step = function(){
  FadedDancer.prototype.step.call(this);
  this.$node.toggleClass('schizo');
};
SchizoDancer.prototype.moveToward = function() {
  // because this dancer is schizo, it moves away when it should move toward
  var directions = [
    {top: '5%', left: 0},
    {top: '5%', left: '90%'},
    {top: '45%', left: 0},
    {top: '45%', left: '90%'}
  ];

  this.$node.animate(
    directions[Math.floor(Math.random()*4)], 200);
};
