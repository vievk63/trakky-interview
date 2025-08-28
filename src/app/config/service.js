import APIEndpoint from "./ApiEndPoint";
import Rest from "./Rest";

export const task1 = async (payload) => {
  const { data } = await Rest.post(APIEndpoint.task1, payload, false, {}, true);

  return data;
};
export const getBetEventDropdownData = async () => {
  const data = await Rest.get(APIEndpoint.getBetEventDropdown);

  if (data) {
    return data?.data;
  }
};

export const task2 = async (pageNumber) => {
  const data = await Rest.get(`${APIEndpoint.task2}?page=${pageNumber}`);
  if (data) {
    return data;
  }
};
