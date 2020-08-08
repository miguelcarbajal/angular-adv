import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Array<any> = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', path: '' },
        { title: 'ProgressBar', path: 'progress' },
        { title: 'Gráficas', path: 'grafica1' },
      ]
    }
  ]

  constructor() { }
}
