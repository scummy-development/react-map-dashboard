import { DashboardMap } from './DashboardMap';
import { DashboardTray } from './DashboardTray';
import './dashboard.css';

export const Dashboard = () => {
  return (
    <div className="map-dashboard">
      <div className="map-dashboard__header">
        <h2>Super Map Dashboard</h2>
        <div className="map-dashboard__tabs">
          <button>Tab 1</button>
          <button>Tab 2</button>
          <button>Tab 3</button>
          <button>Tab 4</button>
          <button>Tab 5</button>
        </div>
      </div>
      <div className="map-dashboard__content">
        <div className="map-dashboard__pane">
          <DashboardTray />
        </div>
        <div className="map-dashboard__pane">
          <DashboardMap />
        </div>
      </div>
    </div>
  );
};
