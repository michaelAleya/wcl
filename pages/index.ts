import './style.css'

import Message from './components/Message.ts'

Message

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<gretting-message title="Hello World!"></gretting-message>`
