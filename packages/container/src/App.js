import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//import { mount } from 'marketing/MarketingApp';
const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});
//console.log(mount);
export default () =>{
    return (
    <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div> 
                <Header />
                <MarketingApp />
            </div>
        </StylesProvider>
    </BrowserRouter>
    );
};