import MenuEntry from './MenuEntry';
import { GENERAL_MENU } from './constants';

import './styles.scss';

const Sidebar = () => {
  return (
    <aside>
      <div className="box__menu">
        <span className="box__menu-title">Geral</span>
        <div className="box__menu-list">
          {Object.entries(GENERAL_MENU).map(([title, { icon }]) => (
            <MenuEntry title={title} icon={icon} />
          ))}
        </div>
      </div>
      <div className="box__menu">
        <span className="box__menu-title">Geral</span>
        <div className="box__menu-list">
          {Object.entries(GENERAL_MENU).map(([title, { icon }]) => (
            <MenuEntry title={title} icon={icon} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;