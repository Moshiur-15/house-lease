import axios from 'axios';

export default async function GetBlog(searchTerm = "") {
  console.log(searchTerm)
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/blogs?search=${searchTerm}`);
    return response.data.blog;
  } catch (error) {
    console.error('Failed to fetch properties:', error);
    return [];
  }
}
