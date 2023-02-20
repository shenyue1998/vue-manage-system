import request from '../utils/request';

export const fetchData = (fileName: string) => {
    const url = './'+fileName+'.json';
    console.log(url);
    return request({
        url,
        method: 'get'
    });
};
