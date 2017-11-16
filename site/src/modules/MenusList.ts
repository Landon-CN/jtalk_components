
    /* tslint:disable */
    import { Component } from 'react';
    import ButtonPage from '../components/ButtonPage'import GridPage from '../components/GridPage'

    interface ListData {
      title: string;
      link: string;
      component: new () => Component;
    }

    const list: ListData[] = [];
    
    list.push({
      title: 'Button 按钮',
      link: '/Button',
      component: ButtonPage
    });
    
    list.push({
      title: 'Grid 栅格',
      link: '/Grid',
      component: GridPage
    });
    
    export default list;
  