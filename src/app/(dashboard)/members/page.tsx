// Lokasi: src/app/(dashboard)/members/page.tsx
import SettingsNav from "../../components/SettingsNav";

export default function MembersPage() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 flex-shrink-0 border-b border-gray-200 bg-white flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
      </div>

      {/* Area Konten Utama */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Kartu Utama yang Mengambang */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            
            {/* Navigasi Tab */}
            <div className="px-6 pt-3">
                <SettingsNav />
            </div>

            {/* Konten Tab "Members" */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Manage members</h2>
                  <p className="mt-1 text-sm text-gray-500">You are currently using 1 of 1 available seats.</p>
                </div>
                <button type="button" className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800">
                  Invite members
                </button>
              </div>

              {/* Tabel Daftar Member */}
              <div className="mt-6 border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Since</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                      {/* Data Member (nanti dari database) */}
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full">
                                    {/* Placeholder Avatar */}
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Habib Dwi K</div>
                                    <div className="text-sm text-gray-500">habib.dwi.k@email.com</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sep 15, 2025</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Owner</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-black hover:underline">Edit</a>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}