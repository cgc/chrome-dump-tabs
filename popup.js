
function dumpTabs() {
  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({windowId: currentWindow.id}, function(tabs) {
      var textBox = document.getElementById('dumped');
      var tabUrls = tabs.map(function(tab) {
        return [tab.title, tab.url].join(' - ');
      });
      var str = tabUrls.join('\n');
      document.getElementById('dump-status').textContent = 'total number of tabs: ' + tabs.length;
      textBox.value = str;

      textBox.select();
      document.execCommand('copy');
    });
  });
}

window.onload = function() {
  document.getElementById('dump').onclick = dumpTabs;
};
