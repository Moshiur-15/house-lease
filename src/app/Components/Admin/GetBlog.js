import axios from 'axios';

export default async function GetBlog() {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs`);
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}
