import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Comprehensive XSS prevention function
export const sanitizeMessage = (value: string): string => {
  // Step 1: Remove all HTML tags completely
  let cleaned = value.replace(/<[^>]*>/g, '')

  // Step 2: Remove dangerous protocols and javascript: URLs
  cleaned = cleaned.replace(/javascript:/gi, '')
  cleaned = cleaned.replace(/data:/gi, '')
  cleaned = cleaned.replace(/vbscript:/gi, '')

  // Step 3: Remove HTML entities that could be used for XSS
  cleaned = cleaned.replace(/&lt;/gi, '')
  cleaned = cleaned.replace(/&gt;/gi, '')
  cleaned = cleaned.replace(/&quot;/gi, '"')
  cleaned = cleaned.replace(/&#x27;/gi, "'")
  cleaned = cleaned.replace(/&#x2F;/gi, '/')
  cleaned = cleaned.replace(/&#x5C;/gi, '')

  // Step 4: Remove potential event handlers and dangerous attributes
  cleaned = cleaned.replace(/on\w+\s*=/gi, '')
  cleaned = cleaned.replace(/style\s*=/gi, '')
  cleaned = cleaned.replace(/href\s*=/gi, '')
  cleaned = cleaned.replace(/src\s*=/gi, '')

  // Step 5: Remove any remaining encoded characters that could be dangerous
  cleaned = cleaned.replace(/%3C/gi, '') // <
  cleaned = cleaned.replace(/%3E/gi, '') // >
  cleaned = cleaned.replace(/%22/gi, '') // "
  cleaned = cleaned.replace(/%27/gi, '') // '
  cleaned = cleaned.replace(/%2F/gi, '') // /

  // Step 6: Remove backslashes and other escape characters
  cleaned = cleaned.replace(/\\/g, '')

  // Step 7: Trim whitespace and normalize spaces
  cleaned = cleaned.trim().replace(/\s+/g, ' ')

  return cleaned
}
