import axios from 'axios';

export default async function GetSingleBlog(id) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs/getSingleBlog/${id}`);
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}