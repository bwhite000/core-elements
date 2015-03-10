library CoreElements.lib.coreElements;

import "dart:html";

part "src/core_icon.dart";

void registerWithDom() {
  document.registerElement('core-icon', CoreIcon);
}