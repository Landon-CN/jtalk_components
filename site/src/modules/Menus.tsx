import React from 'react';
import list from './MenusList';
import './Menus.less';
import { Link } from 'react-router-dom';

class Menus extends React.Component<{}, {}> {
  render() {
    return (
      <div className="menus">
        <ul>
          {
            list.map((data, index) => {
              return (
                <li className="menu-link" key={index}>
                  <Link to={data.link}>{data.title}</Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default Menus;
