import { ClientFunction } from 'testcafe';

function $$(tag) {
  return document.getElementsByTagName(tag)[0];
}

export function getAudioAttr(attr) {
  return ClientFunction(() => $$('audio')[attr], { dependencies: { $$, attr } })();
}
