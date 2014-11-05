describe("SantaDancer", function() {

  var santaDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    santaDancer = new SantaDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(santaDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a function that makes its width extend", function() {
    sinon.spy(santaDancer.$node, 'toggle');
    santaDancer.step();
    expect(santaDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(santaDancer, "step");
      expect(santaDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(santaDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(santaDancer.step.callCount).to.be.equal(2);


    });
  });
});
