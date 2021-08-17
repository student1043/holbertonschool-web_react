import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const pageone = Map(page1);
  const pagetwo = Map(page2);
  return pageone.mergeDeep(pagetwo);
}
