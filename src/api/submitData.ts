export const submitData = async <T>(route: string, payload: any) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ data: payload }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  };
  
  const url = `${process.env.STRAPI_API_URL}/api/${route}`
  const res = await fetch(url, options);
  const response = await res.json();

  return response;
}
