"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObjectType {
}
exports.ObjectType = ObjectType;
exports.SELF_REF = 'self';
class ObjectTypeImpl extends ObjectType {
    constructor(properties) {
        super();
        this.properties = properties;
    }
    keys() {
        return this.properties.keys();
    }
    get(property) {
        const typeRef = this.properties.get(property);
        if (typeRef === undefined) {
            throw new Error();
        }
        if (typeRef === 'self') {
            return this;
        }
        return typeRef;
    }
}
function objectType(propertyTypes) {
    return new ObjectTypeImpl(propertyTypes);
}
exports.objectType = objectType;
//# sourceMappingURL=object-type.js.map