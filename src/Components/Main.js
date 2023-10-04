import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import "./Main.css";
import MemberCard from "./MemberCard";
import ButtonGrid from "./ButtonGrid";

const items = [
  { name: "Coroline Bloeme", isChecked: false },
  { name: "Sun Jun", isChecked: true },
  { name: "Song Bao", isChecked: false },
  { name: "Olivia Arribas", isChecked: true },
  { name: "Bonginkosi Mdlodlana", isChecked: false },
  { name: "Arina Belomestnykh", isChecked: true },
  { name: "Jacqueline Likoki", isChecked: true },
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
