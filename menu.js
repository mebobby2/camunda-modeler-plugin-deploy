module.exports = function(electronApp, menuState) {
  return [{
    label: 'Deploy',
    accelerator: 'CommandOrControl+L',
    enabled: function() {

      return menuState.bpmn;
    },
    action: function() {
      electronApp.emit('menu:action', 'toggleLinting');
    }
  }]
};
