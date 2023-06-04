

Web Component Library basic usage

Component's implemetation:

``` sh

   import { Component } from "../core";

   class YourComponent extends HTMLElement {

      constructor() {
         super();
      }

      connectedCallback() {}

      attributeChangedCallback(name, oldValue, newValue) {}

   }

   Component({ 
      templateUrl: 'your-component-template.html',
      selector: 'your-component-selector'
      attributes: ['props', 'yourProps']
   })(YourComponent);

```

Component's use:

   <your-component-selector yourAttribute="yourAttributeValue"></your-component-selector>


Render is triggered on every attributes changes and for every attribute passed to the component, 
for avoid multiple rendering pass a 'props' attribute that must be either an object or a JSON parsable string.

In any case, attributes are accesible in the component through 'this.props' (see the 'MultimediaVideoPlayer' component for implementation example).



Component's acessible methodes:

    - this.unMountHTML()

   Remove the HTML from the dom, useful when you have to hide/display the component (see the 'MultimediaVideoPlayer' component for usage example).


Component's props:

    - this.prop

   Access the attributes values (see the 'MultimediaVideoPlayer' component for usage example).
   NB: Props must be immutable restriction will come in future release.

Component's state:

   - this.state (Beta)

   Access the internal state in component.

   - this.setState(newState) (Beta)

   Set internal state in component, newState must be an object.
   Example 'this.setState({ show: true })'


Data binding:

   In your template define betwen '{}' the prop or state value that you want to diplay in the template like:

      ```sh
         <span>{buttonLabel}</span>
      ```

Click event biding:

   In your template for the 'click' attribute define between '{}' the component's method that you want to trigger like:

      ```sh
         <button click={hidePlayerEvent}>Click me!</button>
      ```


For more information contact Sam-Michael Ben Aleya














