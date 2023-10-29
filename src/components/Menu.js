import React from "react";
import { Data } from "../helpers/Data";
import  MenuItem  from "./MenuItem";
import '../styles/menu.css'
export default function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((item, index) => (
          <MenuItem
            key={index}
            image={item.image}
            name={item.name}
            content={item.content}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
