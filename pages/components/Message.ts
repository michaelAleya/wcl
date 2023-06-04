import Component from '../../src'



@Component({
    selector: 'gretting-message',
    template: '<div><div>Props: {title}</div><div>State: {counter}</div><button click={increaseCounter}>Increase counter</button></div>',
    attributes: ['title']
})
export default class Message extends HTMLElement {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => this.setState({ counter: this.state.counter + 1})
}