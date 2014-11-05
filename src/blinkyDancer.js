var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('BlinkyDancer');
    this.top = top;
    this.left = left;

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
 // makeDancer.prototype.setPosition.bind(this);
  //this.setPosition(top, left);
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

BlinkyDancer.prototype.checkDistance = function(arr) {
  for(var i=0; i<arr.length; i++){
    if (arr[i] instanceof BlinkyDancer) {
      var xDiff = arr[i].left - this.left;
      var yDiff = arr[i].top - this.top;
      var dist = Math.sqrt(xDiff*xDiff + yDiff*yDiff);

      if(dist < 300){
        console.log(dist);
        var self = this;
        setTimeout(function(){
          console.log('before %d, %d', self.left, self.top);
          self.left -= 200;
          arr[i].left += 200;
          self.$node.animate({left: "+=200"}, 5000)
                    .queue(function(){ $(this).addClass('newcolor').dequeue();});

        //  arr[i].$node.animate({left: arr[i].left}, 5000)
         //           .queue(function(){ arr[i].$node.addClass('anothercolor').dequeue();})
         // self.setPosition(self.left, self.top);
          //self.$node.css({border: "30px solid green"});
         // arr[i].setPosition(arr[i].left, arr[i].top);
          //arr[i].$node.css({border: "30px solid white"});
          console.log('after %d, %d', self.left, self.top);
        }, 2000);

      }
    }
  }

};
