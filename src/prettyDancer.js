var PrettyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('PrettyDancer');

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
PrettyDancer.prototype = Object.create(Dancer.prototype);
PrettyDancer.prototype.constructor = PrettyDancer;
PrettyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.animate({
    opacity:0.6,
    width: "+=20px",
      }, 500);
};

PrettyDancer.prototype.lineUp = function(x,y) {
  this.setPosition(x, y);
};

PrettyDancer.prototype.mouseMove = function(){
  var mouseY = 0;
  var over = 0;
  $('body').on('mousemove', function(e){
    if(over === 0){
      mouseY = e.pageY;
    }
  });
  this.$node.bind('mousever mousemove', function(e) {
    over = 1;
    if (e.pageY < mouseY) {
      alert('over');
      //from bottom
      $(this).animate({
        top:"-=50"
      }, 100);
    } else {
      $(this).animate({
        top:"+=50"
      }, 100);
    }

  });
  this.$node.bind('mouseout', function() {
    over = 0;
  });
};
