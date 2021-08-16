import { list } from 'immutable';

export function getListObject(array) {
    return list(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}
