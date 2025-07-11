import addProperty from "@/app/Models/addProperty";
import { NextResponse } from "next/server";

// Add property
export const property = async (req) => {
  const data = await req.json();
  if (!data.sellerEmail) {
    return NextResponse.json({ message: "Missing sellerEmail", status: 400 });
  }
  const property = await addProperty.create(data);
  return NextResponse.json({ message: "data post", status: 200, property });
};

// get property
export const getProperty = async (req) => {
  const { searchParams } = new URL(req.url);

  const email = searchParams.get("email");
  const search = searchParams.get("search") || "";
  const numberSearch = Number(search);
  const isSearchNum = !isNaN(numberSearch);
  try {
    let query = {
      sellerEmail: email,
    };

    if (search) {
      query.$and = [
        { sellerEmail: email },
        {
          $or: [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { status: { $regex: search, $options: "i" } },
            ...(isSearchNum ? [{price: numberSearch}, {baths: numberSearch}, {beds: numberSearch}] : [] )
          ],
        },
      ];
    }

    const properties = await addProperty.find(query);

    return NextResponse.json({ success: true, data: properties });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};

export const getSingleProperty = async (id) => {
  const property = await addProperty.findById(id);
  return NextResponse.json({ message: "Single post", status: 200, property });
};

// delete property
export const deleteProperty = async (req) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const property = await addProperty.findByIdAndDelete(id);

  return NextResponse.json({
    message: "Deleted successfully",
    status: 200,
    property,
  });
};

// update property
export const updateProperty = async (req, id) => {
  const body = await req.json();
  await addProperty.findByIdAndUpdate(id, body);
  return NextResponse.json({ message: "Updated post", status: 200, body });
};

//get update data
export const getUpdateData = async (req, id) => {
  const property = await addProperty.findOne({ _id: id });
  return NextResponse.json({ message: "Get updated data", property });
};
