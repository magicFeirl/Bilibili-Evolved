import { CustomNavbarItemInit } from '../custom-navbar-item'

export interface NavbarIframeConfig {
  src: string
  href: string
  width: number
  height: number
  lazy: boolean
  displayName: string
  iframeName: string
}
const getIframeItem = (config: NavbarIframeConfig): CustomNavbarItemInit & NavbarIframeConfig => ({
  ...config,
  name: `${config.iframeName}Iframe`,
  content: config.displayName,

  touch: true,

  popupContent: () => import('./IframePopup.vue').then(m => m.default),
  boundingWidth: config.width,
  noPopupPadding: true,
  transparentPopup: true,
})
export const mangaIframe = getIframeItem({
  src: 'https://manga.bilibili.com/eden/bilibili-nav-panel.html',
  href: 'https://manga.bilibili.com',
  width: 720,
  height: 266,
  lazy: true,
  displayName: '漫画',
  iframeName: 'manga',
})
