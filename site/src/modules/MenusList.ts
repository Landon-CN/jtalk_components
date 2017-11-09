
    /* tslint:disable */
    import { Component } from 'react';
    import ButtonPage from '../components/ButtonPage'

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
    
    export default list;
  