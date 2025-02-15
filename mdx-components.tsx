import type { MDXComponents } from 'mdx/types'
import { mdxH1 } from '@/components/markdown/h1'
import { mdxP } from '@/components/markdown/p'
import { mdxA } from '@/components/markdown/a'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: mdxH1,
    p: mdxP,
    a: mdxA,
    ...components,
  }
}