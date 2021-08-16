import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
    return fromJS(object).getIn(array, undefined);
}

export default accessImmutableObject;
