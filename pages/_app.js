import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';

import GlassPanel from 'src/components/glass-panel';

import { Provider } from 'react-redux';
import store from 'src/redux/store';

const CelesteProvider = dynamic(() => import('src/components/celeste'), { ssr: false });

//extern components
import ReactNotification from 'react-notifications-component';
import {custom_notification_types} from 'src/static/notifications';

import 'src/scss/main.scss';
import 'src/components/navbar/navbar.scss';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';
import 'react-notifications-component/dist/theme.css';

const fontAwesomeKey = process.env.FONT_AWESOME_KEY;

function MyApp({ Component, pageProps }) {  
    return(
        <Provider store={store}>
            <CelesteProvider>        
                <Head>
                    <title>Surreal Society</title>
                        
                </Head> 
                <Script src={`https://kit.fontawesome.com/${fontAwesomeKey}.js`} ></Script>

                <ReactNotification
                    types={custom_notification_types}
                />

                <GlassPanel />

                <Component {...pageProps} />  
            </CelesteProvider>
        </Provider> 
    );
}

export default MyApp;