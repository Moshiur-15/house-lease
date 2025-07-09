"use client";

import React, { useEffect, useState } from "react";
import ManagePropertieTable from "@/app/Components/seller/ManagePropertieTable";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

const ManagePropertie = () => {
  const { data: session } = useSession();
  const email = session?.user?.email;

  const [searchItem, setSearchItem] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) return;

    const fetchProperties = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ email, search: searchItem });
        const res = await axios.get(
          `/api/seller/property?${params.toString()}`
        );
        setProperties(res.data.data || []);
      } catch (error) {
        toast.error("Failed to load properties");
        console.error(error);
      }
      setLoading(false);
    };

    fetchProperties();
  }, [email, searchItem]);

  return (
    <section className="my-5 lg:my-10">
      <div className="flex flex-col lg:flex-row justify-between space-y-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MANAGE YOUR PROPERTIES
        </h2>
        <input
          type="text"
          placeholder="Search Properties..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 focus:outline-none w-full max-w-[16rem] py-2 px-3"
        />
      </div>

      <ManagePropertieTable
        properties={properties}
        loading={loading}
        setProperties={setProperties}
      />
    </section>
  );
};

export default ManagePropertie;
