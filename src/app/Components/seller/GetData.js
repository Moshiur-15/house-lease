import axios from 'axios';

export default async function GetPropertiesData() {
  try {
    const response = await axios.get('https://house-lease-6p94zuqie-moshiur-15s-projects.vercel.app/api/seller/property');
    return response.data.property;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}
