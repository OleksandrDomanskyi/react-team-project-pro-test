import instance from "./auth";

const getResult = async ({ answers, type }) => {
  const { data: result } = await instance.post(`/qa-test/${type}-results`, {
    answers,
  });

  return result;
};

export default getResult;
