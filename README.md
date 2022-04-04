# lee-wind-dev/use-scroll-detect

# What is this ?

useScrollDetect: detects scroll event types: scroll derection (horizontal, vertical) and whether page-top or page-bottom or middle.

[![NPM](https://img.shields.io/npm/v/use-scroll-detect.svg)](https://www.npmjs.com/package/use-scroll-detect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-scroll-detect
```

## Usage

```jsx
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
```

## License

MIT © [leewind99](https://github.com/leewind99)

## Options

- `useScrollDetect()` handle and show all detect scroll.
- `useScrollDetect(true,)` detect scroll change based on axis X.
- `useScrollDetect(,true)` detect scroll change based on axis Y.

## Developing

- `useScrollDetect.isPageTop()` whether at the page top or not.
- `useScrollDetect.isPageBottom()` whether at the page bottom or not.
- `useScrollDetect.getPxToTop()` will return scrollTop amount in pixels.
# use-scroll-detect
