import { OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/qbthonui/pages/dashboard'
  },
  {
    title: 'School',
    icon: 'nb-home',
    link: '/qbthonui/pages/school'
  },
  {
    title: 'Student',
    icon: 'nb-person',
    link: '/qbthonui/pages/student'
  },
  {
    title: 'Performance Data',
    icon: 'nb-bar-chart',
    link: '/qbthonui/pages/performancedata'
  },
  {
    title: 'Performance Star',
    icon: 'nb-star',
    link: '/qbthonui/pages/performancestar'
  },
  {
    title: 'Performance Metrics',
    icon: 'nb-collapse',
    link: '/qbthonui/pages/performancemetrics'
  },
  {
    title: 'Admin',
    icon: 'nb-gear',
    link: '/qbthonui/pages/admin'
  },
  {
    title: 'Logout',
    icon: 'ion-log-out',
    link: '/qbthonui/login'
  }
];

export class PageMenu implements OnInit {

  private static finalMenu: any = [];
  private uiMenuList = [];

  ngOnInit(): void {

  }

  public static getMenus(): NbMenuItem[] {

    this.finalMenu = [];
    let menu = localStorage.getItem('uiMenuList');

    if ((typeof menu !== 'undefined') && null !== menu && '' !== menu) {
      let uiMenuList = menu.split('~');

      for (let menuObj of MENU_ITEMS) {
        if (uiMenuList.includes(menuObj.title)) {
          this.finalMenu.push(menuObj);
        }
      }
    }
    return this.finalMenu;
  }

}
