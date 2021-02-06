export const ReactDom = {
    render(elementHtml, ...elementsReact) {
        elementsReact.forEach(elementReact => {
            elementHtml.appendChild(elementReact);
        })
    },
};

export const React = {
    /**
     * @param {String|ReactElement} tagOrElement
     * @param {object} props
     * @param {Array} children
     */
    createElement(tagOrElement, props, children = null) {
        let element = null;
        if (typeof tagOrElement === 'string' || tagOrElement instanceof String) {
            element = document.createElement(tagOrElement);

            for (let attribute in props) {

                if (attribute === "onClick") {
                    element.addEventListener('click', props[attribute]);
                }
                if (attribute === "onSubmit") {
                    element.addEventListener('submit', props[attribute]);
                }
                if (attribute === "class") {
                    let className = "";
                    if (Array.isArray(props[attribute])) {
                        props[attribute].forEach(classN => {
                            className = classN + ' ' + className
                        });
                        props[attribute] = className.substring(0, className.length - 1);
                    }
                }

                element.setAttribute(attribute, props[attribute]);
            }

            for (let subElement of children) {
                if (typeof subElement === "string") {
                    let match = subElement.match(/{{[^ ]*}}/g)
                    if (match !== null) {
                        match.forEach(match => {
                            let matchClear = match.replace(/[{}]/g, "");
                            if (prop_access(props, matchClear)) {
                                subElement = subElement.replace(match, prop_access(props, matchClear))
                            }
                        });
                    }
                    subElement = document.createTextNode(
                        subElement
                    );
                }

                element.appendChild(subElement);
            }
        } else if (isClass(tagOrElement)) {
            const component = new tagOrElement(props, children);

            if (component.propTypes) {
                if (Array.isArray(props.class)) {
                    if (component.propTypes.properties) {
                        props.class.forEach((item, index) => {
                            if (!type_check(item, component.propTypes.properties.class)) {
                                throw new TypeError();
                            }
                        })
                    }
                } else {
                    if (!type_check(props, component.propTypes)) {
                        throw new TypeError();
                    }
                }
            }
            return component.display(props);


        }
        return element;
    },
};


function isClass(func) {
    return typeof func === 'function'
        && /^class\s/.test(Function.prototype.toString.call(func));
}

function type_check_v1(arg, type) {
    switch (typeof arg) {
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(arg);
                case "object":
                    return arg !== null && !Array.isArray(arg);
                default:
                    return false;
            }
        default:
            return typeof arg === type;
    }
}

function type_check_v2(variable, conf) {
    for (let key in conf) {
        switch (key) {
            case "type":
                if (!type_check_v1(variable, conf.type)) return false;
                break;
            case "value":
                if (JSON.stringify(variable) !== JSON.stringify(conf.value))
                    return false;
                break;
            case "enum":
                enum_loop: {
                    for (let subValue of conf.enum) {
                        if (type_check_v2(variable, {value: subValue})) {
                            break enum_loop;
                        }
                    }
                    return false;
                }
        }
    }

    return true;
}

function type_check(object, conf) {
    let check = type_check_v2(object, conf);
    if (!conf.properties) return check;
    for (const typeKey in conf.properties) {
        check = type_check(type_check_v1(object, 'object') ? object[typeKey] : object, conf.properties[typeKey]);
        if (!check) break
    }
    return check;
}

function prop_access(object, path) {
    if (typeof path !== "string" || path === "" || typeof object !== "object") return object;
    if (object === null) {
        return false;
    }
    let items = path.split(".");
    let result = object;
    let buildPath = "";
    for (let element in items) {
        result = result[items[element]];
        if (element > 0) buildPath += ".";
        buildPath += items[element];
        if (result === undefined || result === null) {
            return false;
        }
    }
    return result;
}