import { Suspense } from "react";
import SuccessClient from "../Components/buyer/SuccessClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessClient />
    </Suspense>
  );
}
