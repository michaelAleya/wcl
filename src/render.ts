
export interface ChangeSource {
    state: 'state'
    props: 'props'
}

export const CHANGE_SOURCE: ChangeSource = {
    state: 'state',
    props: 'props'
}

const templateProcess = (target: any, source: ChangeSource['state'] | ChangeSource['props']): string => {
    let processedTemplate: string = target.template
    if (target[source]) {
        Object.keys(target[source]).forEach(key => processedTemplate = processedTemplate.replace(new RegExp(`{${key}}`, 'g'), target[source][key]))
        return processedTemplate
    }
    return processedTemplate
}

export default function render(target: any, changeSource: ChangeSource['state'] | ChangeSource['props']) {
    target.innerHTML = templateProcess(target, changeSource)
}




