import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import { UserContext } from "../context/UserContext";
import PageLayout from "../components/PageLayout";

const HomePage = () =>{
const { userName } = useContext(UserContext);
  return (
    <PageLayout title="Home" headline={"Hello there ${userName}"}>
<p>
  Welcome back!
</p>
    </PageLayout>
  );
};
export default HomePage;