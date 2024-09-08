import axios from 'axios';
import http from '../axios';

class CommonService {
     getName() {
        return http().get();
    }
}

export default new CommonService();
