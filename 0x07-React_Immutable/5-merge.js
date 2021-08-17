import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const firstpage = List(page1);
  const secondpage = List(page2);
  return firstpage.concat(secondpage);
}

export function mergeElements(page1, page2) {
  const pageone = Map(page1);
  const pagetwo = Map(page2);
  return pageone.merge(pagetwo);
}
