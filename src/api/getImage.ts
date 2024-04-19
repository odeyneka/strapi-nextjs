export const getImage = (data: any) => {
  const url: string = data.attributes.Image.data?.attributes?.url;
  const imageUrl = url.startsWith('https') ? url : `${process.env.STRAPI_API_URL}${url}`;
  console.log(url);
  console.log( imageUrl);

  return imageUrl;
}