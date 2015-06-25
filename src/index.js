/**
 * Grab the current x, y scroll offset
 *
 * @method getScrollPosition
 *
 * @return {Object} X, Y offset values
 */
function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
}

/**
 * Grab the current position of an element. Takes into account current scroll
 * position of the window.
 *
 * @method getElementPosition
 *
 * @param {Object} el DOM node we want get position of
 *
 * @return {Object} Position coords of the DOM node
 */
export function getElementPosition(el, addOffset = true) {
  let rect = el.getBoundingClientRect();
  let left = rect.left;
  let top = rect.top;
  
  if (addOffset) {
    let scrollOffset = getScrollPosition();
    left += scrollOffset.x;
    top += scrollOffset.y;
  }
    
  return {
    left,
    top,
    bottom: top + rect.height,
    right: left + rect.width
  };
}
