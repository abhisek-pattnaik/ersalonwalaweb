
export default function SalonDetailsModal({ isOpen, onClose }:{isOpen:boolean, onClose:()=>void}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* Modal Container */}
      <div className="bg-slate-950/95 border border-slate-800 rounded-2xl w-full max-w-2xl p-6 md:p-8 text-slate-300 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6 border-b border-slate-900 pb-5">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Salon Details</h2>
            <p className="text-sm text-slate-500">Configure salon identity and operational parameters.</p>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors p-1.5 hover:bg-slate-900 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mb-8">
          
          {/* Salon Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Salon Name
            </label>
            <input 
              type="text" 
              className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="Enter salon name"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Owner Name
            </label>
            <input 
              type="text" 
              className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="Enter owner name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Phone Number
            </label>
            <input 
              type="text" 
              className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="Enter phone number"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
              placeholder="Enter email address"
            />
          </div>

          {/* Salon Type */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Salon Type
            </label>
            <div className="relative">
              <select className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                <option>Premium Barbershop</option>
                <option>Standard Salon</option>
                <option>Luxury Spa</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Subscription Plan */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
              Subscription Plan
            </label>
            <div className="relative">
              <select className="w-full bg-slate-900/60 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                <option>Enterprise Elite</option>
                <option>Professional</option>
                <option>Basic</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-slate-900 my-6" />

        {/* Compliance Documents Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-base font-semibold text-white">Compliance Documents</h3>
            <button className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1.5 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload New
            </button>
          </div>

          <div className="space-y-3">
            {/* Document 1 */}
            <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/50 p-4 rounded-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-300">Identity Proof (CEO)</h4>
                  <p className="text-xs text-slate-500">ID PROOF • 2026.PDF • 2.1MB</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  VERIFIED
                </span>
                <button className="text-slate-500 hover:text-white transition-colors p-1">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Document 2 */}
            <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/50 p-4 rounded-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 border border-amber-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-300">Business Operating License</h4>
                  <p className="text-xs text-slate-500">LICENSE • MAIN_V2.PNG • 1.7MB</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  UNDER REVIEW
                </span>
                <button className="text-slate-500 hover:text-white transition-colors p-1">
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-900 my-6" />

        {/* System Approval State */}
        <div className="flex items-center justify-between bg-slate-900/60 border border-slate-900 p-4 rounded-xl mb-8">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">System Approval State</h4>
              <p className="text-xs text-slate-500">Enabling this grants the salon access to the booking engine.</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-10 h-6 bg-slate-800 rounded-full peer peer-checked:after:translate-x-4 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end items-center gap-4">
          <button 
            onClick={onClose} 
            className="px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-white transition-colors"
          >
            Discard Changes
          </button>
          <button 
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/25 transition-all"
          >
            Save Salon Profile
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 8" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}