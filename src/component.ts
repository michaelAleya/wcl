import fetchTemplate from "./fetcher";
import { assignPropertiesFromAttributes, assignProperty } from "./properties";
import setState from './state';
import attachEvents from './events';

const none = (): void => {};

interface ComponentMeta {
     selector: string
     templateUrl?: string
     template?: string
     attributes?: string[] 
}

export default function Component({ selector, templateUrl, template, attributes }: ComponentMeta ) {

    if (!templateUrl && !template) {
        console.error("Component must include template or templateUrl to compile");
        return;
    }

    if (!selector) {
        console.error("Component must include selector to compile");
        return;
    }

    return async (target: any) => {

        const connectedCallback = target.prototype.connectedCallback || none;
        const attributeChangedCallback = target.prototype.attributeChangedCallback || none;

        target.prototype.template = templateUrl ? await fetchTemplate(templateUrl) : template;

        target.prototype.constructor.observedAttributes = attributes;

        target.prototype.connectedCallback = function() {
            assignPropertiesFromAttributes(attributes, this);
            attachEvents(this);
            connectedCallback.call(this);
        };

        target.prototype.attributeChangedCallback = function(name: string, oldValue: any, newValue: any) {
            assignProperty(name, newValue, this);
            attributeChangedCallback.call(this, name, oldValue, newValue);
        };

        target.prototype.state = {};
        target.prototype.setState = function(newState: any) {
            setState(newState, this);
        };

        target.prototype.unMountHTML = function() {
            this.innerHTML = null;
        };

        customElements.define(selector, target);

        return target;
    };
}
