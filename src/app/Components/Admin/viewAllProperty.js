import axios from "axios";

export const viewAllProperty = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/property`
    );
    return res.data.property;
  } catch (err) {
    console.log(err);
  }
};
