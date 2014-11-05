var SantaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('SantaDancer');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 // makeDancer.prototype.setPosition.bind(this);
  //this.setPosition(top, left);
};
SantaDancer.prototype = Object.create(Dancer.prototype);
SantaDancer.prototype.constructor = SantaDancer;
SantaDancer.prototype.step = function(){
  // call the old version of     step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
SantaDancer.prototype.lineUp = function(x,y) {
  console.log('line');
  this.setPosition(500, this.top);
};
