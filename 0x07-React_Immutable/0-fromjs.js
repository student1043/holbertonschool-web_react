function getImmutableObject(object) {
    const { fromJS } = require('immutable');
    return(fromJS(object));
}
