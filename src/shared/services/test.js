import instance from "./auth";

const getTest = async (type) => {
  const data = await instance.get(`/qa-test/${type}`);
  return data;
};

export default getTest;
