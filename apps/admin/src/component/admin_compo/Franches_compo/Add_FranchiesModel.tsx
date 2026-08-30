import { useState } from "react";
export default function Add_FranchiesModel({ isOpen, onClose }:{isOpen:boolean,onClose:()=>void}) {
   const [formData, setFormData] = useState({
    franchiseName: '',
    ownerName: '',
    phoneNumber: '',
    emailAddress: '',
    status: 'Active - Fully Operational'
  });

  const [cities, setCities] = useState(['New York City', 'Brooklyn']);
  const [newCity, setNewCity] = useState('');

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCity = (e:any) => {
    e.preventDefault();
    if (newCity.trim() !== '') {
      setCities([...cities, newCity.trim()]);
      setNewCity('');
    }
  };

  const handleRemoveCity = (indexToRemove:any) => {
    setCities(cities.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Data Submitted:', { ...formData, cities });
    onClose();
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm bg-opacity-70">
      
      {/* Modal Container */}
      <div className="w-full max-w-lg bg-[#0c101b]/90 border border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative text-gray-200">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-100">Add Franchise Partner</h2>
            <p className="text-xs text-gray-500 mt-1">Create a new partner entry to start managing their performance metrics.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Franchise Name & Owner Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Franchise Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  name="franchiseName"
                  value={formData.franchiseName}
                  onChange={handleChange}
                  placeholder="e.g. Skyline Studio Downtown" 
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-sky-500/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Owner Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Full legal name" 
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-sky-500/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Phone Number & Email Address */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.322.988l-.995.74a10.647 10.647 0 004.855 4.855l.74-.995a1 1 0 01.988-.322l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C8.444 20.996 3 15.556 3 9V5z" />
                  </svg>
                </span>
                <input 
                  type="tel" 
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000" 
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-sky-500/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <input 
                  type="email" 
                  name="emailAddress"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="partner@franchise.com" 
                  className="w-full bg-[#111827] border border-gray-800 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-sky-500/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Assigned Cities/Areas */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Assigned Cities / Areas
            </label>
            <div className="w-full bg-[#111827] border border-gray-800 rounded-xl px-3 py-2.5 flex flex-wrap items-center gap-2 focus-within:border-sky-500/60 transition-colors">
              {cities.map((city, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-sky-950/50 text-sky-400 border border-sky-500/10 rounded-md select-none"
                >
                  {city}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveCity(index)}
                    className="text-sky-600 hover:text-sky-400 font-bold ml-0.5"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <div className="flex-1 min-w-[8rem]">
                <input 
                  type="text" 
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddCity(e)}
                  placeholder="+ Add Area" 
                  className="w-full bg-transparent text-sm text-gray-200 placeholder-gray-600 focus:outline-none py-0.5"
                />
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div>
            <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Account Status
            </label>
            <div className="relative">
              <select 
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-[#111827] text-sm border border-gray-800 rounded-xl px-4 py-3.5 pr-10 text-gray-200 appearance-none focus:outline-none focus:border-sky-500/60 transition-colors"
              >
                <option>Active - Fully Operational</option>
                <option>Pending - Verification Required</option>
                <option>Inactive - Suspended</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Buttons Footer */}
          <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-800/60">
            <button 
              type="button" 
              onClick={onClose}
              className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white bg-[#111827] border border-gray-800 hover:bg-gray-800/60 rounded-xl transition duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-400 to-blue-500 hover:opacity-95 text-gray-950 text-sm font-semibold rounded-xl shadow-lg transition duration-200"
            >
              <svg className="w-4 h-4 text-gray-950 font-bold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 8" />
              </svg>
              Save Partner
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

