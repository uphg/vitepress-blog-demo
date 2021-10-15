import { computed } from 'vue'
import { useData } from 'vitepress'

export function useNextAndPrevLinks() {
  const { theme, page } = useData()
  const { pages } = theme.value as { pages: { title: string, path: string }[] }
  

  const prev = computed(() => {
    const path = page.value.relativePath.replace(/\.md$/g, '')
    for (let i = 0; i < pages.length; i++) {
      const context = pages[i]
      if (context.path === path) {
        if (i > 0) {
          return {
            text: pages[i - 1].title,
            link: pages[i - 1].path
          }
        }
      }
    }
  })

  const next = computed(() => {
    const path = page.value.relativePath.replace(/\.md$/g, '')
    for (let i = 0; i < pages.length; i++) {
      const context = pages[i]
      if (context.path === path) {
        if (i + 1 < pages.length) {
          return {
            text: pages[i + 1].title,
            link: pages[i + 1].path
          }
        }
      }
    }
  })

  // const { prev, next } = computed(() => {
  //   const path = page.value.relativePath.replace(/\.md$/g, '')
  //   let next: { text: string, link: string } | null = null
  //   let prev: { text: string, link: string } | null = null
  //   for (let i = 0; i < pages.length; i++) {
  //     const context = pages[i]
  //     if (context.path === path) {
  //       if (i > 0) {
  //         prev = {
  //           text: pages[i - 1].title,
  //           link: pages[i - 1].path
  //         }
  //       }
  //       if (i + 1 < pages.length) {
  //         next = {
  //           text: pages[i + 1].title,
  //           link: pages[i + 1].path
  //         }
  //       }
  //       break
  //     }
  //   }
  //   return {
  //     next,
  //     prev
  //   }
  // })
  
  const hasLinks = computed(() => !!next.value || !!prev.value)

  return {
    next,
    prev,
    hasLinks
  }
}
