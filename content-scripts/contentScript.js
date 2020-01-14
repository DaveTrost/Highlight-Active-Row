console.log('highlight-active-row: Injecting rowHighlighter...');
var s = document.createElement('script');
s.src = chrome.runtime.getURL('content-scripts/rowHighlighter.js');
s.onload = function() {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);
