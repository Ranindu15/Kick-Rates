import { NavItem } from './nav-item';

export class Menu {
  id: string;
  type: string;
  title: string;
  hide: boolean;
  disable: boolean;
  icon: string;
  restrictKey: string;
  subItems: Array<NavItem>;
  clevertapEvent: string;
  hideInMobile: boolean;

  constructor() {
    this.id = ''
    this.title = ''
    this.type = ''
    this.hide = false
    this.disable = false
    this.icon = ''
    this.restrictKey = ''
    this.subItems = []
    this.clevertapEvent = ''
    this.hideInMobile = false
  }
}

export enum MenuType {
  MAIN = 'MAIN',
  ICON = 'ICON'
}
