import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Main.css";
import MemberCard from "./MemberCard";
import ButtonGrid from "./ButtonGrid";

const items = [
  { name: "Item 1", isChecked: false },
  { name: "Item 2", isChecked: true },
  { name: "Item 3", isChecked: false },
  { name: "Item 4", isChecked: true },
  { name: "Item 5", isChecked: false },
  { name: "Item 6", isChecked: true },
  { name: "Item 7", isChecked: true },
];

const Main = () => {
  return (
    <div className="Main-div">
      <Header />
      <SearchBar />
      {items.map((item, index) => (
        <MemberCard key={index} item={item} />
      ))}
      <ButtonGrid />
    </div>
  );
};

export default Main;
