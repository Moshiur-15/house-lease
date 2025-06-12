import axios from 'axios';

export default async function GetSingleBlog(id) {
  try {
    const response = await axios.get(`https://house-lease.vercel.app/api/admin/blogs/getSingleBlog/${id}`);
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}