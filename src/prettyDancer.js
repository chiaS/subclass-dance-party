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
    height: "+=20px",
      }, 500);
};

PrettyDancer.prototype.lineUp = function(x,y) {
  this.setPosition(x, y);
};

PrettyDancer.prototype.mouseMove = function(){
  var mouseX = 0;
  var over = 0;
  $('body').on('mousemove', function(e){
    if(over === 0){
      mouseX = e.pageX;
    }
  });
  this.$node.bind('mousever mousemove', function(e) {
    over = 1;
    if (e.pageX < mouseX) {
      alert('over');
      //from bottom
      $(this).animate({
        left:"-=50"
      }, 100);
    } else {
      $(this).animate({
        left:"+=50"
      }, 100);
    }

  });
  this.$node.bind('mouseout', function() {
    over = 0;
  });
};
