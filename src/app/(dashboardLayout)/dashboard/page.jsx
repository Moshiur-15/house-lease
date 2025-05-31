import { Suspense } from "react";
import Loader from "../../components/Loader";


const Dashboard = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <h2 className="text-xl font-bold mb-4">WELCOME TO DASHBOARD</h2>
      </div>
    </Suspense>
  );
};

export default Dashboard;
