export const getImage = (data: any) => {
  const url = data.attributes.Image.data?.attributes?.url

  return url;
}