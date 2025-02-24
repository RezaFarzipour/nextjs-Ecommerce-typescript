'use client'
   import Image from 'next/image'
   import { useState } from 'react'

   const ImageHover = ({
     src,
     hoverSrc,
     alt,
   }: {
     src: string
     hoverSrc: string
     alt: string
   }) => {
     const [isHovered, setIsHovered] = useState(false)
     let hoverTimeout: ReturnType<typeof setTimeout>
     /**
      * When the user hovers over the image, this function is called. It waits 500ms
      * before setting `isHovered` to true. This delay is important because it allows
      * the user to quickly move their mouse over the image without triggering the
      * hover effect.
      */
     const handleMouseEnter = () => {
       hoverTimeout = setTimeout(() => setIsHovered(true), 500) 
     }

     const handleMouseLeave = () => {
       clearTimeout(hoverTimeout)
       setIsHovered(false)
     }

     return (
       <div
         className='relative h-52'
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
       >
         <Image
           src={src}
           alt={alt}
           fill
           sizes='80vw'
           className={`object-contain transition-opacity duration-500 ${
             isHovered ? 'opacity-0' : 'opacity-100'
           }`}
         />
         <Image
           src={hoverSrc}
           alt={alt}
           fill
           sizes='80vw'
           className={`absolute inset-0 object-contain transition-opacity duration-500 ${
             isHovered ? 'opacity-100' : 'opacity-0'
           }`}
         />
       </div>
     )
   }

   export default ImageHover