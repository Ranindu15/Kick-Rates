export class NavItem {
  id: string;
  title: string;
  hide: boolean;
  restrictKey: string;
  url: string;
  target: string;
  clevertapEvent: string;
  constructor() {
    this.id = ''
    this.title = ''
    this.hide = false
    this.restrictKey = ''
    this.url = ''
    this.target = ''
    this.clevertapEvent = ''
  }
}
