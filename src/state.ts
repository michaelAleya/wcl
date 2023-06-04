import render, { CHANGE_SOURCE } from "./render";

export default function setState(newState: any, target: any): void {
    target.state = { ...target.state, ...newState };
    render(target, CHANGE_SOURCE.state);
}
