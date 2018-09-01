$(function() {

 new Dragdealer('content-scroller', {
    y: 1,
    horizontal: false,
    vertical: true,
    animationCallback: function(x, y) {
        if (y > 0.05) {
            this.setValue(1,1)
        } else {
            this.disable()
            window.location.href = "unlocked.html"
        }
    }
  });
})
