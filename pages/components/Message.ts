import Component from '../../src'



@Component({
    selector: 'gretting-message',
    template: '<div><div>Props: {title}</div><div>Counter: {counter}</div><button click={increaseCounter}>Increase counter</button></div>',
    attributes: ['title']
})
export default class Message extends HTMLElement {
    constructor() {
        super()
        this.state = {
            Counter: 0
        }
    }


    increaseCounter = () => this.setState({ counter: 0})




}