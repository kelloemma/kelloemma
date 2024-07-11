import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/banner/Banner';
import RowLists from '../components/row/rowList/RowLists';


const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <RowLists/>
            <Footer/>
        </div>
    );
}

export default Home;
