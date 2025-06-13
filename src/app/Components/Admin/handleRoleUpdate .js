import axios from "axios";

const handleRoleUpdate = async (id, newRole) => {
  try {
    const res = await axios.put(``, {
      role: newRole,
    });

    console.log("Updated:", res.data);
  } catch (error) {
    console.error("Update failed:", error);
  }
};
export default handleRoleUpdate;
