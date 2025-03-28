import React from "react";
import Header from "../Header/Header";
import Additional from "../Addtional/Additional";
import Options from "../Options/Options";
import CarCards from "../CarCards/CarCards";
import Footer from "../Footer/Footer";

function MainPage(){
    return (
        <>
        <Header/>
        <Additional/>
        <Options/>
        <CarCards/>
        <Footer/>
        </>
    );
}

export default MainPage;