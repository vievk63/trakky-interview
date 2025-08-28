import { useEffect, useState } from "react";
import { task2 } from "../config/service";
import Loader from "../component/Loader";

function Task2() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getSalon();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(data);
    } else {
      const result = data?.filter((item) =>
        item?.service_name?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(result);
    }
  }, [search, data]);

  const getSalon = async () => {
    setLoading(true);
    const data = await task2(1);
    if (data) {
      setData(data?.data);
      setFilteredData(data?.data || []);
    }

    setLoading(false);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">Service List</h3>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by service name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded w-1/3"
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full border border-gray-300 text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">No</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Service
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Salon
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                City
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Area
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Price
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Gender
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan="8"
                  className="border border-gray-300 px-4 py-4 text-center text-gray-600"
                >
                  <Loader />
                </td>
              </tr>
            ) : filteredData?.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="border border-gray-300 px-4 py-4 text-[30px] text-center text-red-500"
                >
                  No Data Found
                </td>
              </tr>
            ) : (
              filteredData?.map((item, index) => (
                <tr
                  key={item?.id}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.service_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.salon_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.city}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.area}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.gender}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item?.category_name ??
                      item?.master_service_data?.category?.name}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task2;
