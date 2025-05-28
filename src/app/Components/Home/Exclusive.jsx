import ExclusiveCard from "./ExclusiveCard";
import GetPropertiesData from "../seller/GetData";

const Exclusive = async () => {
  const properties = await GetPropertiesData();
  console.log(properties)

  return (
    <div className="px-4 sm:px-6 lg:px-24">
      <div className="flex flex-col space-y-1 text-center">
        <span className="text-xs font-semibold tracking-widest flex justify-center items-center gap-1 uppercase">
          <div className="h-2.5 w-2.5 rounded-full bg-[#EA703B]"></div>Exclusive
        </span>
        <h2 className="text-3xl font-bold text-gray-900">
          Featured Properties
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
        {properties?.slice(0, 6).map((property) => (
          <ExclusiveCard property={property} key={property._id} />
        ))}
      </div>
    </div>
  );
};

export default Exclusive;
