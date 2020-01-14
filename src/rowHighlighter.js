(function() {
  console.log('highlight-active-row: rowHighlighter Injected!');

  // Attach focusin/focusout listeners to the document;
  document.addEventListener('focusin', onFocusIn, true);
  document.addEventListener('focusout', onFocusOut, true);

  function onFocusIn({ target }) {
    setStyle(
      getRowNode(target),
      'font-weight: bold; background-color: yellow; outline: thin solid'
    );
  }

  function onFocusOut({ target }) {
    setStyle(getRowNode(target), '');
  }

  function getRowNode(el) {
    const MAX_DEPTH = 5;
    let rowNode;
    let curEl = el;
    for (let i = 0; i < MAX_DEPTH; i++) {
      if (curEl && curEl.tagName === 'TR') {
        rowNode = curEl;
        break;
      }
      curEl && (curEl = curEl.parentNode);
      if (MAX_DEPTH === i + 1)
        console.log(
          'highlight-active-row: Unable to find Row Element. Increase MAX_DEPTH'
        );
    }
    return rowNode;
  }

  function setStyle(el, style) {
    el && (el.style.cssText = style);
  }
})();
