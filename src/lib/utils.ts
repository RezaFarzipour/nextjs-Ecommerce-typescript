import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatNumberWithDecimal = (num: number): string => {
  const [int, decimal] = num.toString().split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : int
}
//create toSlug ts arrow function that convert text to lowercase, remove non-word, non-whitespace, non-hyphen characters, replace whitespace, trim leading hyphens and trim trailing hyphens

export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '') //کاراکترهای خاص مثل !@#$%^&*() حذف می‌شوند 
    .replace(/\s+/g, '-') //هر نوع فاصله را به خط فاصله (-) تبدیل می‌کند.
    .replace(/^-+|-+$/g, '') //هرگونه خط فاصله اضافی در ابتدای یا انتهای رشته را حذف می‌کند.




    const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
      currency: 'USD',
      style: 'currency',
      minimumFractionDigits: 2,
    })
    export function formatCurrency(amount: number) {
      return CURRENCY_FORMATTER.format(amount)
    }
 
    const NUMBER_FORMATTER = new Intl.NumberFormat('en-US')
    export function formatNumber(number: number) {
      return NUMBER_FORMATTER.format(number)
    }