// Sliding drawer functionality navigation and div elements.
var Drawer = {
  init: function() {
    Drawer.bindUI();
    Drawer.activateDrawer();
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
    window.addEventListener('hashchange', function() {
      Drawer.activateDrawer();
    });
  },

  activateDrawer: function() {
    if (location.hash) {
      var targetDrawer = document.getElementById(location.hash.substring(2));
      if (targetDrawer) {
        var drawers = document.getElementsByClassName('project-pane');
        Drawer.closeNonTargetDrawers(targetDrawer, drawers, 'hidden');
        Drawer.openTargetDrawer(targetDrawer, 'hidden');
        SmoothScroll.scrollToTop();
      }      
    }
  },

  closeNonTargetDrawers: function(target, drawers, visibleClass) {
    for (var i = 0; i < drawers.length; ++i) {
      if (drawers[i] !== target &&
          !drawers[i].classList.contains(visibleClass)) {
            drawers[i].classList.toggle(visibleClass);
          }
    }
  },

  openTargetDrawer: function(target, visibleClass) {
    if (target.classList.contains(visibleClass)) {
      target.classList.toggle(visibleClass);
    }
  }
};
