import type { MDXComponents } from 'mdx/types'
import { mdxH1 } from '@/components/markdown/h1'
import { mdxP } from '@/components/markdown/p'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: mdxH1,
    p: mdxP,
    ...components,
  }
}