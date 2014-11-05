describe("prettyDancer", function() {

  var prettyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    prettyDancer = new PrettyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(prettyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a function that makes its width extend", function() {
    sinon.spy(prettyDancer.$node, 'animate');
    prettyDancer.step();
    expect(prettyDancer.$node.animate.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(prettyDancer, "step");
      expect(prettyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(prettyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(prettyDancer.step.callCount).to.be.equal(2);


    });
  });
});
