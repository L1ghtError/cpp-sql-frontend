const BACKEND_URL = "localhost:3000";
export const getConfigArr = async () => {
  const response = await fetch(`http://${BACKEND_URL}/get/config`, {
    method: "GET",
  });
  return response;
};

export const addEntity = async (body) => {
  const response = await fetch(`http://${BACKEND_URL}/addEntity`, {
    method: "POST",
    body: body,
  });
  return response;
};

export const getTableAttr = async (tableName) => {
  const response = await fetch(
    `http://${BACKEND_URL}/get/tableInfo?table=${tableName}`,
    {
      method: "GET",
    }
  );
  return response;
};

export const getUserById = async (userId, tableName) => {
  let resp= await fetch(`http://${BACKEND_URL}/get/tableInfo?table=${tableName}`, {
    method: "GET",
  })
    
  return resp;
};
