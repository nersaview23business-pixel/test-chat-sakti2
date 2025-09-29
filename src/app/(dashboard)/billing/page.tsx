// Lokasi: src/app/(dashboard)/billing/page.tsx
import SettingsNav from "../../components/SettingsNav";

export default function BillingPage() {
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

            {/* Konten Tab "Billing" */}
            <div className="p-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Billing method</h2>
                <p className="mt-1 text-sm text-gray-500">Manage your payment methods.</p>
                
                {/* Tabel Metode Pembayaran */}
                <div className="mt-6 border rounded-lg overflow-hidden">
                   <div className="p-6 text-center">
                     <p className="text-sm text-gray-500">No payment methods on file.</p>
                     <button type="button" className="mt-4 px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800">
                       Add payment method
                     </button>
                   </div>
                </div>
              </div>

              {/* Garis Pemisah */}
              <div className="border-t border-gray-200 my-8"></div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900">Billing history</h2>
                <p className="mt-1 text-sm text-gray-500">View and download your past invoices.</p>
                
                {/* Tabel Riwayat Tagihan */}
                <div className="mt-6 border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {/* Empty state untuk tabel */}
                        <tr>
                            <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500">No invoices yet.</td>
                        </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </> // <-- INI DIA PENUTUP YANG KEMARIN KETINGGALAN
  );
}