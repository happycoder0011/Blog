import React from "react";
import Header from "../parts/header";
import Footer from "../parts/footer";
import Postdisc from "../parts/Postdisc";
import Comment from "../parts/Comment"

const Single = () => {
    return (
        <>
        <Header/>
        <div className="single-post no-sidebar">
        <Postdisc/>
        <Comment/>
        </div>
        <Footer/>

       
        </>
    );
};

export default Single;