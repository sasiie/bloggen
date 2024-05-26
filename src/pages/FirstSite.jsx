import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import PageLayout from "../components/PageLayout";

const FirstSite = () =>{
const { userName } = useContext(UserContext);
  return (
    <PageLayout title="Welcome" headline="Hello, welcome to Saras Blog where you can...">
<p>
  This websites gives you the opportunity to express your ......
</p>
    </PageLayout>
  );
};
export default FirstSite;