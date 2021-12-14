import React from "react";
import "./sidebar.css";
import {
  PeopleAlt,
  Group,
  Chat,
  Favorite,
  Work,
  BarChart,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <PeopleAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Amis</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groupes</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Conversations</span>
          </li>
          <li className="sidebarListItem">
            <Favorite className="sidebarIcon" />
            <span className="sidebarListItemText">Favoris</span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarListItemText">Emplois</span>
          </li>
          <li className="sidebarListItem">
            <BarChart className="sidebarIcon" />
            <span className="sidebarListItemText">Statistiques</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Amis les plus actifs</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Centres d'Intérêts</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Recherche thématique</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Pages</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Météo</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            
              <span className="sidebarListItemText"> <a href="/login">Suggestions</a></span>
          </li>
        </ul>
        <button className="sidebarButton">Voir plus</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
};

export default Sidebar;
