import { useState } from "react";
import { EditIcon } from "../../components/Icons";
import { BsTrash } from "react-icons/bs";
import YellowButton from "../../components/YellowButton";
import CreateStaffModal from "./modals/CreateStaffModal";

interface Staff {
  id: number;
  staffId: string;
  name: string;
  role: string;
  joiningDate: string;
  status: string;
}

const staffMembersData: Staff[] = [
  {
    id: 1,
    staffId: "STF-001",
    name: "John Doe",
    role: "Hair Stylist",
    joiningDate: "2023-04-15",
    status: "Unavailable",
  },
  {
    id: 2,
    staffId: "STF-002",
    name: "Sarah Khan",
    role: "Makeup Artist",
    joiningDate: "2023-06-20",
    status: "Available",
  },
  {
    id: 3,
    staffId: "STF-003",
    name: "Ali Raza",
    role: "Massage Therapist",
    joiningDate: "2023-01-10",
    status: "Available",
  },
];

const ServiceProviderStaffMembers = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Available", "Unavailable"];
  const [showModal , setShowModal] = useState(false);

  const filteredStaff =
    activeTab === "All"
      ? staffMembersData
      : staffMembersData.filter((staff) => staff.status === activeTab);

  return (
    <div className="bg-white p-6 m-4 border rounded-xl border-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-black mb-2">Staff Members</h1>
          <p className="text-[#83898F]">
            Manage your staff — view profiles, check status, and update roles with ease.
          </p>
        </div>
        <YellowButton 
      text="Add New" 
      wFull={false} 
      handleClick={()=>setShowModal(true)}
    />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg cursor-pointer font-medium transition-colors ${
              activeTab === tab
                ? "text-primary bg-light-blue"
                : "text-[#83898F] bg-gray-100 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table (Responsive) */}
      <div className="bg-gray-50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-100 text-black font-medium">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Mobile Number</th>
                <th className="px-6 py-4">Joining Date</th>
                <th className="px-6 py-4">Availability</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredStaff.map((staff) => (
                <tr
                  key={staff.id}
                  className="bg-white hover:bg-gray-50 transition-colors"
                >
                 
                  <td className="px-6 py-4 text-black">{staff.name}</td>
                  <td className="px-6 py-4 text-black">+92 4545565</td>
                  <td className="px-6 py-4 text-black">{staff.joiningDate}</td>
                  <td className="px-6 py-4">
                   
                      Tue : 11AM-1PM, 5-8PM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                         className="px-3 py-2 bg-[#FFCC00] text-black font-medium rounded-lg hover:bg-yellow-600 transition-colors"
                        title="Edit Staff"
                      >
                       <EditIcon />
                      </button>
                      <button
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        title="Remove Staff"
                      >
                       <BsTrash />
                      </button>
                      
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredStaff.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No staff members found
          </h3>
        </div>
      )}

      {<CreateStaffModal showModal={showModal} onClose={()=>setShowModal(false)} />}
    </div>
  );
};

export default ServiceProviderStaffMembers;
