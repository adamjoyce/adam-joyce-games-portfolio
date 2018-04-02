// Sliding drawer functionality navigation and div elements.
var Drawer = {
  init: function() {
    Drawer.bindUI();
  },

  bindUI: function() {
    // Mobile navigation menu.
    var toggleElement = document.getElementById('mobile-menu-toggle');
    if (toggleElement) {
      // The drawer element associated with this toggle element.
      var drawerElement = document.getElementById(toggleElement.dataset.drawer);

      // Toggles the drawer open and closed on click.
      toggleElement.addEventListener('click', function() {
        if (drawerElement.classList.contains('drawer-closed')) {
          drawerElement.style.borderBottom = 'solid 1px #999';
        }
        drawerElement.classList.toggle('drawer-closed');
      });

      // Hides the bottom border after drawer closing transition ends.
      drawerElement.addEventListener('transitionend', function() {
        if (drawerElement.classList.contains('drawer-closed')) {
          drawerElement.style.borderBottom = '0px none';
        }
      });
    }

    // Project panes.
    var toggleElements = document.getElementsByClassName('project');
    if (toggleElements) {
      // Grab all potential project drawers.
      var drawerElements = document.querySelectorAll('[id*="project-pane-"]');
      for (var i = 0; i < toggleElements.length; ++i) {
        toggleElements[i].addEventListener('click', function(e) {
          var targetDrawer = document.getElementById(
            e.target.parentNode.dataset.drawer
          );
          if (targetDrawer) {
            // Closes any currently opened drawers that are not the target.
            for (var i = 0; i < drawerElements.length; ++i) {
              if (drawerElements[i] !== targetDrawer &&
                  !drawerElements[i].classList.contains('hidden')) {
                    drawerElements[i].classList.toggle('hidden');
                  }
            }

            // Toggle the target open if closed.
            if (targetDrawer.classList.contains('hidden')) {
              targetDrawer.classList.toggle('hidden');
            }
            Drawer.smoothScrollToTop();
          }
        });
      }
    }
  },

  smoothScrollToTop: function() {
    var currentScroll = document.documentElement.scrollTop ||
                        document.body.scrollTop;
    if (currentScroll > 0) {
      // Smoothly animate a scroll to the top.
      window.requestAnimationFrame(Drawer.smoothScrollToTop);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  }
};
