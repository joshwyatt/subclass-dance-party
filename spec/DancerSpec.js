describe("BlinkyDancer", function() {

  var blinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(blinkyDancer, "step");
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...


      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("FadedDancer", function() {

  var linkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadedDancer = new FadedDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(fadedDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node fade", function() {
    sinon.spy(fadedDancer.$node, 'fadeToggle');
    fadedDancer.step();
    expect(fadedDancer.$node.fadeToggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(fadedDancer, "step");
      expect(fadedDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...


      expect(fadedDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadedDancer.step.callCount).to.be.equal(2);
    });
  });
});


describe("SchizoDancer", function() {

  var schizoDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    schizoDancer = new SchizoDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(schizoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node be schizophrenic", function() {
    sinon.spy(schizoDancer.$node, 'fadeToggle');
    sinon.spy(schizoDancer.$node, 'toggleClass');
    schizoDancer.step();
    expect(schizoDancer.$node.fadeToggle.called).to.be.true;
    expect(schizoDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(schizoDancer, "step");
      expect(schizoDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...


      expect(schizoDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(schizoDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("Line Up", function() {
  var timeBetweenSteps = 100,
      dancer,
      blinkyDancer,
      fadedDancer,
      schizoDancer,
      colorChangeDancer;

  beforeEach(function() {
    dancer = new Dancer(10, 20, timeBetweenSteps);
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    fadedDancer = new FadedDancer(10, 20, timeBetweenSteps);
    schizoDancer = new SchizoDancer(10, 20, timeBetweenSteps);
    colorChangeDancer = new ColorChangeDancer(10, 20, timeBetweenSteps);
  });

  describe("dancer array", function() {
    it("should have an array of dancers", function() {
      console.log($('.addDancerButton'));
    $('.addDancerButton').trigger('click');
      expect(window.dancers.length > 0).to.be.true;
    });
  });

});
