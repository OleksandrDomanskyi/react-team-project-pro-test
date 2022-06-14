import instance from './auth';

export const getTechTest = async () => {
    const { data } = await instance.get('/qa-test/tech');
    return data;
};

export const getTheoryTest = async () => {
    const { data } = await instance.get('/qa-test/theory');
    return data;
};