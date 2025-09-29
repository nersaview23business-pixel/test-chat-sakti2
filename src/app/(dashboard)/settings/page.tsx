// Lokasi: src/app/(dashboard)/settings/page.tsx
import SettingsNav from "../../components/SettingsNav"; // <-- Pastikan alamat ini benar

export default function SettingsPage() {
  return (
    <>
      {/* Top Bar */}
      <div className="h-16 flex-shrink-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-gray-900">Settings</h1>
      </div>

      {/* Area Konten Utama */}
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Kartu Utama yang Mengambang */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            
            {/* Navigasi Tab di dalam kartu */}
            <div className="px-6 pt-3">
                <SettingsNav />
            </div>

            {/* Konten Tab "Profile" */}
            <div className="p-6">
              <div className="space-y-8">
                
                {/* --- Bagian Workspace Details --- */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Workspace details</h2>
                  <p className="mt-1 text-sm text-gray-500">Update your workspace name and URL.</p>
                  
                  <form className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="ws-name" className="block text-sm font-medium text-gray-700">Workspace Name</label>
                      <input type="text" name="ws-name" id="ws-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm" defaultValue="Habib Dwi K's workspace"/>
                    </div>
                     <div>
                      <label htmlFor="ws-url" className="block text-sm font-medium text-gray-700">Workspace URL</label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">chatsakti.com/</span>
                        <input type="text" name="ws-url" id="ws-url" className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-black focus:ring-black sm:text-sm" defaultValue="habib-dwi-ks"/>
                      </div>
                       <p className="mt-2 text-xs text-gray-500">Changing the workspace URL will redirect you to the new address.</p>
                    </div>
                  </form>
                </div>
                
                {/* Garis Pemisah Halus */}
                <div className="border-t border-gray-200"></div>

                {/* --- Danger Zone --- */}
                <div>
                  <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
                  <p className="mt-1 text-sm text-gray-500">Once you delete your workspace, there is no going back. Please be certain.</p>
                  <div className="mt-4">
                      <button type="button" className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-red-700">
                          Delete workspace
                      </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Tombol Save di Luar Kartu */}
          <div className="mt-6 flex justify-end">
            <button type="submit" className="px-6 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800">
                Save Changes
            </button>
          </div>

        </div>
      </main>
    </>
  );
}