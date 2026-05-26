'use client'

import { useEffect } from 'react'

import { socket }
from '@/lib/socket'

export const useSocket = () => {

  useEffect(() => {

    socket.connect()

    socket.on(
      'connect',
      () => {
        console.log(
          'Socket Connected'
        )
      }
    )

    socket.on(
      'generation-progress',
      (data) => {
        console.log(
          'Progress:',
          data
        )
      }
    )

    socket.on(
      'generation-complete',
      (data) => {
        console.log(
          'Completed:',
          data
        )
      }
    )

    return () => {

      socket.off(
        'generation-progress'
      )

      socket.off(
        'generation-complete'
      )
    }

  }, [])
}