// Lokasi: src/app/(dashboard)/my-plan/page.tsx
import SettingsNav from "../../components/SettingsNav";

export default function MyPlanPage() {
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

            {/* Konten Tab "My Plan" */}
            <div className="p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Current Plan</h2>
                <p className="mt-1 text-sm text-gray-500">Information about your current subscription plan.</p>
                
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Pro Plan (Monthly)</p>
                      <p className="mt-1 text-sm text-gray-600">Your plan renews on October 16, 2025.</p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </div>
                  <button type="button" className="mt-6 px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50">
                      Manage Subscription
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}