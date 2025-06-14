import user from "@/app/Models/user";

export async function PUT(req, { params }) {
  await connectDB();
  const { id } = params;
  const { role } = body;
  const body = await req.json();
  console.log(id, role, body)

  try {
    const updatedUser = await user.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Role updated", user: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update role", error: error.message },
      { status: 500 }
    );
  }
}
