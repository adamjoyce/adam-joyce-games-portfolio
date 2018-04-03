// Sliding drawer functionality navigation and div elements.
var Drawer = {
  hiddenClass: 'hidden',
  activeProjectDrawer: '',

  init: function() {
    Drawer.bindUI();

    // Check for initial open drawer i.e. page refresh with hash URL.
    if (location.hash) {
      var targetDrawer = document.getElementById(location.hash.substring(2));
      Drawer.toggleDrawer(targetDrawer, Drawer.hiddenClass);
      Drawer.activeProjectDrawer = targetDrawer;
    }
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
      Drawer.manageDrawers();
    });
  },

  manageDrawers: function() {
    if (location.hash) {
      var targetDrawer = document.getElementById(location.hash.substring(2));
      if (targetDrawer) {
        if (Drawer.activeProjectDrawer) {
          // Close the active drawer.
          Drawer.toggleDrawer(Drawer.activeProjectDrawer, Drawer.hiddenClass);
        }
        Drawer.toggleDrawer(targetDrawer, Drawer.hiddenClass);
        SmoothScroll.scrollToTop();
        Drawer.activeProjectDrawer = targetDrawer;
      }
    }
  },

  toggleDrawer: function(drawer, hiddenClass) {
    if (drawer !== '') {
      drawer.classList.toggle(hiddenClass);
    }
  }
};
