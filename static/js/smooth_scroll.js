var SmoothScroll = {
  scrollToTop: function() {
    var currentScroll = document.documentElement.scrollTop ||
                        document.body.scrollTop;
    if (currentScroll > 0) {
      // Smoothly animate a scroll to the top.
      window.requestAnimationFrame(SmoothScroll.scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }
}
