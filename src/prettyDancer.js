var makePrettyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
   this.$node.addClass('prettyDancer');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 // makeDancer.prototype.setPosition.bind(this);
  //this.setPosition(top, left);
};
makePrettyDancer.prototype = Object.create(makeDancer.prototype);
makePrettyDancer.prototype.constructor = makePrettyDancer;
makePrettyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

makePrettyDancer.prototype.lineUp = function(x,y) {
   var styleSettings = {
    top: x,
    left: y
  };
  this.$node.css(styleSettings);
};
