import axios from 'axios';

export default async function GetBlog() {
  try {
    const response = await axios.get('https://house-lease.vercel.app/api/admin/blogs');
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}
