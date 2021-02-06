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



function type_check_v1(variable, type) {
    const typeOfVariable = typeof variable;

    switch (typeOfVariable) {
        case "object":
            switch (type) {
                case "null":
                    return variable === null;
                case "array":
                    return Array.isArray(variable);
                case "object":
                    return variable !== null && !Array.isArray(variable);
                default:
                    return false;
            }
        default:
            return typeOfVariable === type;
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
            //
            case "enum":
                enum_loop: {
                    for (let subValue of conf.enum) {
                        if (type_check_v2(variable, { value: subValue })) {
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




// Jeu de tests pour type_check
console.log(type_check(1, { type: "number", value: 1 }) === true);
console.log(type_check(1, { type: "number", value: 3 }) === false);
console.log(type_check(1, { type: "object", value: 1 }) === false);
console.log(
    type_check("string", { type: "string", enum: ["string1", "string2"] }) ===
    false
);
console.log(
    type_check({ bar: "foo" }, { type: "object", value: { bar: "foo" } }) === true
);
console.log(
    type_check({ bar: "foo" }, { type: "object", value: { bar: "value" } }) ===
    false
);
console.log(
    type_check(
        {
            toto: {
                fi: 3,
                fa: {
                    trim: " test ",
                },
            },
        },
        {
            type: "object",
            properties: {
                toto: {
                    type: "object",
                    properties: {
                        fi: { value: 3 },
                        fa: { enum: [3, "string", { trim: " test " }] },
                    },
                },
            },
        }
    ) === true
);

