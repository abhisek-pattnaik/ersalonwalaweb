import { useState } from 'react';

export default function CreateSalonPageOffcanvas({ isOpen = true, onClose}: { isOpen: boolean; onClose: () => void }) {
  const [pageTitle, setPageTitle] = useState('');
  const [content, setContent] = useState('');
  const [metaTitle, setMetaTitle] = useState('The Salon Engineering Standard');
  const [keywords, setKeywords] = useState('Hair, Precision, Technical, Salon');
  const [metaDescription, setMetaDescription] = useState(
    'A technical deep-dive into our signature salon methodologies...'
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl h-full bg-[#0b0f19] text-gray-300 flex flex-col border-l border-gray-800 shadow-2xl animate-slide-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-800/80 bg-[#0c111c]">
          <div className="flex items-center gap-4">
            <button 
              onClick={()=>{onClose()}}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div>
              <h2 className="text-base font-semibold text-white tracking-tight flex items-center gap-2">
                Create Salon Page
              </h2>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">
                ID: P-982-ENG-SALON
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-[#0c111c] flex items-center justify-center text-xs font-bold text-blue-200">
                D
              </div>
            </div>
            
            <button className="px-3.5 py-2 text-xs font-medium text-gray-300 bg-[#161d2d] hover:bg-[#1d263a] border border-gray-700/60 rounded-lg transition-all shadow-sm">
              Share Prototype
            </button>
            
            <button className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all shadow-md shadow-blue-500/10 flex items-center gap-1.5">
              Publish Page
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
          
          {/* Main Content Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wider uppercase border-b border-gray-900 pb-2">
              <span className="w-1.5 h-3.5 bg-blue-500 rounded-full"></span>
              Main Content
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                Page Title
              </label>
              <input
                type="text"
                placeholder="e.g., Advanced Color Engineering"
                value={pageTitle}
                onChange={(e) => setPageTitle(e.target.value)}
                className="w-full bg-[#111723] border border-gray-800/80 rounded-lg px-3.5 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-all focus:ring-1 focus:ring-gray-800"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                Rich Text Content
              </label>
              <div className="border border-gray-800/80 rounded-lg bg-[#111723] overflow-hidden">
                <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-800/80 text-gray-400 text-sm bg-[#0e1420]">
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><span className="font-bold">B</span></button>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><span className="italic">I</span></button>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><span className="underline">U</span></button>
                  <div className="w-px h-4 bg-gray-800 mx-1.5"></div>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg></button>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg></button>
                  <div className="w-px h-4 bg-gray-800 mx-1.5"></div>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg></button>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg></button>
                  <button className="p-1 hover:text-white rounded hover:bg-gray-800 transition"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg></button>
                </div>
                <textarea
                  rows={6}
                  placeholder="Engineer your story here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-transparent border-0 p-4 text-sm text-gray-300 placeholder-gray-600 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* SEO Optimization Section */}
          <div className="space-y-4 pt-6 border-t border-gray-900">
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 tracking-wider uppercase border-b border-gray-900 pb-2">
              <span className="w-1.5 h-3.5 bg-blue-500 rounded-full"></span>
              SEO Optimization
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className="w-full bg-[#111723] border border-gray-800/80 rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gray-600 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full bg-[#111723] border border-gray-800/80 rounded-lg px-3.5 py-3 text-sm text-white focus:outline-none focus:border-gray-600 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-gray-500 uppercase tracking-wider mb-2">
                Meta Description
              </label>
              <textarea
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                className="w-full bg-[#111723] border border-gray-800/80 rounded-lg p-4 text-sm text-gray-300 focus:outline-none focus:border-gray-600 transition-all resize-none"
              />
            </div>

            {/* SERP Preview */}
            <div className="bg-[#0e1420] border border-gray-900/40 rounded-lg p-5 mt-4">
              <div className="text-[10px] uppercase font-semibold text-gray-500 tracking-wider mb-3">
                SERP Preview
              </div>
              <h3 className="text-blue-400 text-sm font-semibold hover:underline cursor-pointer leading-tight mb-1">
                Advanced Color Engineering | Engineer Salon
              </h3>
              <span className="text-emerald-500 text-[11px]">
                https://engineersalon.com/services/advanced-color
              </span>
              <p className="text-gray-500 text-xs mt-1.5 leading-relaxed line-clamp-2">
                Experience the highest level of technical precision in hair color. Our master engineers utilize advanced chromatography...
              </p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-800/80 bg-[#0c111c] flex items-center justify-between">
          <button className="p-2 text-gray-500 hover:text-red-400 transition-all flex items-center gap-2 text-xs">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Discard Draft
          </button>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2.5 text-xs font-medium text-gray-400 hover:text-white border border-gray-800/80 hover:bg-gray-900 rounded-lg transition-all">
              Save as Draft
            </button>
            <button className="px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border border-gray-700/40 rounded-lg transition-all flex items-center gap-2 shadow-lg">
              <svg className="w-4 h-4 animate-spin text-blue-400 hidden" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Update Live
            </button>
          </div>
        </div>
        
        <style>
          {`
            @keyframes slideIn {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}
        </style>

      </div>
    </div>
  );
}