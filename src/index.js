import React from 'react'

export const useScrollDetect = ({ axisX, axisY, ...props }) => {
  const THRESHOLD = 0
  const [scrollDetect, setScrollDetect] = React.useState('none-scroll')
  const blocking = React.useRef(false)
  const prevScrollX = React.useRef(0)
  const prevScrollY = React.useRef(0)

  React.useEffect(() => {
    prevScrollX.current = window.pageXOffset
    prevScrollY.current = window.pageYOffset

    const updateScrollDetect = () => {
      const scrollX = window.pageXOffset
      const scrollY = window.pageYOffset
      if (axisX === axisY) {
        if (
          Math.abs(scrollX - prevScrollX.current) >= THRESHOLD &&
          Math.abs(scrollY - prevScrollY.current) >= THRESHOLD
        ) {
          const newScrollDetect =
            scrollX > prevScrollX.current && scrollY > prevScrollY.current
              ? 'right-down'
              : scrollX < prevScrollX.current && scrollY > prevScrollY.current
              ? 'left-down'
              : scrollX < prevScrollX.current && scrollY < prevScrollY.current
              ? 'left-up'
              : scrollX > prevScrollX.current && scrollY < prevScrollY.current
              ? 'right-up'
              : scrollX > prevScrollX.current && scrollY === prevScrollY.current
              ? 'right'
              : scrollX < prevScrollX.current && scrollY === prevScrollY.current
              ? 'left'
              : scrollX === prevScrollX.current && scrollY > prevScrollY.current
              ? 'down'
              : scrollX === prevScrollX.current && scrollY < prevScrollY.current
              ? 'up'
              : 'scroll'

          setScrollDetect(newScrollDetect)
          prevScrollX.current = scrollX > 0 ? scrollX : 0
          prevScrollY.current = scrollY > 0 ? scrollY : 0
        }
      }
      if (axisX && !axisY) {
        if (Math.abs(scrollX - prevScrollX.current) >= THRESHOLD) {
          const newScrollDetect =
            scrollX > prevScrollX.current ? 'right' : 'left'

          setScrollDetect(newScrollDetect)

          prevScrollX.current = scrollX > 0 ? scrollX : 0
        }
      }
      if (axisY && !axisX) {
        if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
          const newScrollDetect = scrollY > prevScrollY.current ? 'down' : 'up'

          setScrollDetect(newScrollDetect)

          prevScrollY.current = scrollY > 0 ? scrollY : 0
        }
      }

      blocking.current = false
    }

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(updateScrollDetect)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDetect])

  return scrollDetect
}
