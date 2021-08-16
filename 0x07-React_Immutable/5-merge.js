import { Map, List } from 'immutable';

export function concatElements (page1, page2) {
    const pageone = List(page1);
    const pagetwo = List(page2);
    return pageone.concat(pagetwo);
}

export function mergeElements (page1, page2) {
    const pageone = Map(page1);
    const pagetwo = Map(page2);
    return pageone.merge(pagetwo);
}
