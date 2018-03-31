var Drawer = {
  init: function() {
    Drawer.bindUI();
  },

  bindUI: function() {
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
  }
};
