export const uploadData = async <T>(data: FormData) => {
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
    }
  };
  
  const url = `${process.env.STRAPI_API_URL}/api/upload`
  const res = await fetch(url, options);
  const response = await res.json();

  return response;
}