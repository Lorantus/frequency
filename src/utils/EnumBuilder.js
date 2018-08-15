export function enumBuilderArray(...mapper) {
    const enums = [];
    return {
        push(...values) {
            enums.push(Object.freeze(values.reduce(
                (accu, value, index) => (accu[mapper[index]] = value, accu),
                {}
            )));
            return this;
        },
        build() {
            return Object.freeze(enums);
        }
    }
}

export function enumBuilderObject(...mapper) {    
    const enums = {};
    return {
        push(name, ...values) {
            enums[name] = Object.freeze(values.reduce(
                (accu, value, index) => (accu[mapper[index]] = value, accu),
                {name}
            ));
            return this;
        },
        build() {
            return Object.freeze(enums);
        }
    }
}