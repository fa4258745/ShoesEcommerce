
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'swiper/css';
import 'swiper/css/navigation';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


import store from './store.jsx';
import {Provider} from "react-redux";
createRoot(document.getElementById('root')).render(
<Provider store={store}>
 <App />
</Provider>
    
 
)
