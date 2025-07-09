import axios from "axios";

export const viewAllProperty = async (search = "") => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/property?search=${search}`
    );
    return res.data.property;
  } catch (err) {
    console.error("Error fetching properties:", err);
    return [];
  }
};
