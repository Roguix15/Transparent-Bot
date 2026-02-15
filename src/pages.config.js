import Home from './pages/Home';
import Commands from './pages/Commands';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Commands": Commands,
    "TermsOfService": TermsOfService,
    "PrivacyPolicy": PrivacyPolicy,
    "About": About,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
