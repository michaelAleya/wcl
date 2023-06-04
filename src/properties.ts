import render, { CHANGE_SOURCE } from './render';

export const assignPropertiesFromAttributes = (attributes: string[] | null, target: HTMLElement): void => {
    if (attributes) attributes.forEach(attribute => assignProperty(attribute, target.getAttribute(attribute), target));
    render(target, CHANGE_SOURCE.props);
};

export const assignProperty = (name: string, value: any, target: any): void => {
    if (name === 'props') {
        let propsValue = value;
        if (typeof propsValue !== 'object') {
            try {
                propsValue = JSON.parse(propsValue);
            } catch {
                console.error('Props must be either an object or a JSON parsable string');
                throw new Error(`Error while trying to parse props with value: ${propsValue}`);
            }
        }
        target.props = { ...target.props, ...propsValue };
    } else {
        target.props = { ...target.props, [name]: value };
    }
    render(target, CHANGE_SOURCE.props);
};
