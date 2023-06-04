export default function attachEvents(target: any): void {
    target.addEventListener('click', (event: Event) => {
        const callbackEvent = (event.target as HTMLElement)?.getAttribute('click')?.replace(/[{}]/g, '');
        if (callbackEvent) {
            target[callbackEvent]();
        }
    });
}
