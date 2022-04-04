import * as React from 'react'

import { useScrollDetect } from 'use-scroll-detect'

const App = () => {
  const derection = useScrollDetect({})
  console.log('derection', derection)

  return (
    <>
      <div style={{ width: '3000px', height: '3000px' }}></div>
    </>
  )
}

export default App
