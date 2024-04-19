export const getImage = (data: any) => {
  const url = data.attributes.Image.data?.attributes?.url
  const imageUrl = url ? `${process.env.STRAPI_API_URL}${url}` : url;

  return imageUrl;
}