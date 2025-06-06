import { isBrowser } from '@/utils/is'
import { useEffect, useLayoutEffect } from 'react'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
