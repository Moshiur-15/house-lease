import axios from 'axios';

export default async function GetPropertiesData() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/seller/property`);
    return response.data.property;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}
