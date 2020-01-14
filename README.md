# Highlight Active Row
Chrome Extension that applies a custom highlight style to a focused table row.

Chrome Web Store Link: [Highlight Active Row](https://chrome.google.com/webstore/detail/highlight-active-row/dcbeiccbdljdceifakkgndpemfaoeaip)

## Description:
This extension helps prevent mistaken data entry by making the currently selected table row more visible. Anytime an input box inside of a table is selected the entire table row gets its style changed. The goal is to make it extremely obvious which row you are currently inputting data on to reduce the chances of inputting data on the wrong row.


## How it works:
The extension injects a small script that adds a 'focusin'/'focusout' event listener to the root document object. 

When the 'focusin' event fires it starts at the event.target and traverses the DOM in search of a  <tr> parent element. If <tr> is found it sets the inline style to a preset highlight style.

When the 'focusout' event fires it starts at the event.target and traverses the DOM in search of a  <tr> parent element. If <tr> is found it clears the inline style.

### Limitations:
Currently has a hard set MAX_DEPTH of 5 which limits how many parents it check before stopping. This should prevent all unnecessary DOM traversing for nodes not connected to a table, but also allow some wiggle room if the input is in a `<div>` or two.

## Future features:
- add an options page that allows the user to set a custom highlight style
- allow the user to enable/disable the extension for each website domain


## Version History:
- 1.1.0: Switched to focusin/focusout events & delegation which works with dynamically added content.
- 1.0.0: Event listener were attached to each input element on load & didn't work with dynamically added content.
