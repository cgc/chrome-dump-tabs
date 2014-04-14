
function dumpTabs() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({windowId: currentWindow.id}, function(tabs) {
      var tabUrls = [];
      tabs.forEach(function(tab) {
        tabUrls.push(tab.url);
      });
      var str = tabUrls.join('\n');
      document.getElementById('dump-status').textContent = tabs.length;
      document.getElementById('dumped').value = str;
    });
  });
}

window.onload = function() {
  document.getElementById('dump').onclick = dumpTabs;

  var textBox = document.getElementById('dumped');
  // http://stackoverflow.com/questions/5797539/jquery-select-all-text-from-a-textarea
  textBox.onfocus = function() {
    textBox.select();

    // Work around Chrome's little problem
    textBox.onmouseup = function() {
      // Prevent further mouseup intervention
      textBox.onmouseup = null;
      return false;
    };
  };

};
