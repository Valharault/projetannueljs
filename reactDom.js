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
    createElement(tagOrElement, props, children) {
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
                element.setAttribute(attribute, props[attribute]);
            }

            for (let subElement of children) {
                if (typeof subElement === "string") {
                    subElement = document.createTextNode(
                        subElement /*.interpolate(props)*/
                    );
                }

                element.appendChild(subElement);
            }
        } else if (isClass(tagOrElement)){
                const component = new tagOrElement(props, children);

                if (component.propTypes) {
                    console.log(type_check(props, component.propTypes));
                    if(!type_check(props, component.propTypes)) {
                        throw new TypeError();
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
                    return arg === null;
                case "array":
                    return Array.isArray(arg);
                default:
                    return arg !== null && !Array.isArray(arg);
            }
        default:
            return arg === type;
    }
}

function type_check_v2(arg, object) {
    for (let item in object) {
        switch (item) {
            case 'type':
                if (!type_check_v1(arg, object.type)) return false;
                break;
            case 'value':
                if (arg !== object.value) return false;
                break;
            case 'enum':
                let found = false;
                for (value of object.enum) {
                    found = type_check_v2(arg, {value: value})
                    if (found) break;
                }
                if (!found) return false
                break
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




