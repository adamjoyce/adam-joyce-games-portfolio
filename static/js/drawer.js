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
      for (var i = 0; i < toggleElements.length; ++i) {
        var drawerElement = document.getElementById(
          toggleElements[i].dataset.drawer
        );
        toggleElements[i].addEventListener('click', function() {
          drawerElement.classList.toggle('hidden');
          console.log("CLICKED + " + drawerElement.id);
        });
      }
    }
  }
};
