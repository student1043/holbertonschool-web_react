import { Map } from 'immutable';

const accessImmutableObject = (object, array) => {
    return Map(object).getIn(array, undefined);
}

export default accessImmutableObject;
