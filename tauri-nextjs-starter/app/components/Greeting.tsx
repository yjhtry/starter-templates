'use client'

import { invoke } from '@tauri-apps/api'
import { sendNotification } from '@tauri-apps/api/notification'

export default function Greeting() {
  const onClick = async () => {
    const response: string = await invoke('hello', { msg: 'tauri' })

    sendNotification(response)
  }
  return (
    <div>
      <button onClick={onClick} className="bg-gray-50 rounded-md px-4 py-2 text-black">
        hello
      </button>
    </div>
  )
}
