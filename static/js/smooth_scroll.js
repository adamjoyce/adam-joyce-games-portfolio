var SmoothScroll = {
  maxWidthSet: false,
  scrollToTop: function() {
    if (!SmoothScroll.maxWidthSet) {
      document.body.style.maxWidth = document.body.clientWidth + 'px';
      document.body.style.overflowY = 'hidden';
      SmoothScroll.maxWidthSet = true;
    }
    var currentScroll = document.documentElement.scrollTop ||
                        document.body.scrollTop;
    if (currentScroll > 0) {
      // Smoothly animate a scroll to the top.
      window.requestAnimationFrame(SmoothScroll.scrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
    else {
      document.body.style.maxWidth = 'none';
      document.body.style.overflowY = 'visible';
      SmoothScroll.maxWidthSet = false;
    }
  }
}
