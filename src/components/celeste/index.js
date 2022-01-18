import {initCeleste} from 'celeste-framework/dist/store-module';
import { CelesteProvider } from 'celeste-framework';
import celesteOptions from './celeste-options';

initCeleste(celesteOptions);

const Celeste = ({children}) => {   
    return <CelesteProvider>{children}</CelesteProvider>;    
};

export default Celeste;