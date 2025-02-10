// import { useState, useEffect } from 'react'

// /**
//  * https://www.webtips.dev/webtips/react-hooks/element-in-viewport
//  */

// const intersectionMethod = (element: unknown, rootMargin: string) => {
//   const [isVisible, setIsVisible] = useState<boolean>(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting)
//         /**
//          * This is to set the observer only once
//          */
//         // if (entry.isIntersecting) {
//         //     setIsVisible(entry.isIntersecting);
//         //     observer.unobserve(element.current);
//         // }
//       },
//       { rootMargin }
//     )

//     element.current && observer.observe(element.current)

//     return () => {
//       observer.unobserve(element.current)
//     }
//   }, [])

//   return isVisible
// }

// export default intersectionMethod
