import instance from './auth';

export const getTechResult = async () => {
    const { data } = await instance.post('/qa-test/tech-results');
    return data;
};

export const getTheoryResult = async () => {
    const { data } = await instance.post('/qa-test/theory-results');
    return data;
};