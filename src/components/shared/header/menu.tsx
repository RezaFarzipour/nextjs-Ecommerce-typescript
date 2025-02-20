import React from 'react'
import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
const Menu = () => {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href="/signin" className='flex items-center header-button'>
                Hello ,Sign in
            </Link>

            <Link href="/cart" className='header-button'>
            <div className='flex items-end'></div>
            <ShoppingCartIcon className='h-8 w-8' />
            Cart
            </Link>
        </nav>
    </div>
  )
}

export default Menu