export const fetchData = async (route: string) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  };
  
  const url = `${process.env.STRAPI_API_URL}/api/${route}`
  const res = await fetch(url, options);
  const response = await res.json();

  return response?.data;
}