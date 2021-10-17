import { Route } from 'vitepress'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' 
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn') 
dayjs.extend(relativeTime)

export const hashRE = /#.*$/
export const extRE = /(index)?\.(md|html)$/
export const endingSlashRE = /\/$/
export const outboundRE = /^[a-z]+:/i

export function isNullish(value: any): value is null | undefined {
  return value === null || value === undefined
}

export function isArray(value: any): value is any[] {
  return Array.isArray(value)
}

export function isExternal(path: string): boolean {
  return outboundRE.test(path)
}

export function isActive(route: Route, path?: string): boolean {
  if (path === undefined) {
    return false
  }

  const routePath = normalize(`/${route.data.relativePath}`)
  const pagePath = normalize(path)

  return routePath === pagePath
}

export function normalize(path: string): string {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '')
}

export function joinUrl(base: string, path: string): string {
  const baseEndsWithSlash = base.endsWith('/')
  const pathStartsWithSlash = path.startsWith('/')

  if (baseEndsWithSlash && pathStartsWithSlash) {
    return base.slice(0, -1) + path
  }

  if (!baseEndsWithSlash && !pathStartsWithSlash) {
    return `${base}/${path}`
  }

  return base + path
}

/**
 * get the path without filename (the last segment). for example, if the given
 * path is `/guide/getting-started.html`, this method will return `/guide/`.
 * Always with a trailing slash.
 */
export function getPathDirName(path: string): string {
  const segments = path.split('/')

  if (segments[segments.length - 1]) {
    segments.pop()
  }

  return ensureEndingSlash(segments.join('/'))
}

export function ensureSlash(path: string): string {
  return ensureEndingSlash(ensureStartingSlash(path))
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function ensureEndingSlash(path: string): string {
  return /(\.html|\/)$/.test(path) ? path : `${path}/`
}

/**
 * Remove `.md` or `.html` extention from the given path. It also converts
 * `index` to slush.
 */
export function removeExtention(path: string): string {
  return path.replace(/(index)?(\.(md|html))?$/, '') || '/'
}

/**
 * 显示相对时间
 * 在两年内显示相对时间，两年后显示绝对时间。
 */
export function displayTime(time: number | string): string {
  if (!time) return ''
  const currentTime = new Date().getTime()
  const blogTime = new Date(time).getTime()
  const oneDay = 24 * 3600 * 1000
  const oneYear = 365 * oneDay - (31 * oneDay)
  const lastYearToday = currentTime - oneYear

  return blogTime - lastYearToday > 0 ? dayjs(time).fromNow() : dayjs(time).format('YYYY-MM-DD')
}