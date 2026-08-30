import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSliders, 
  faXmark,  
  faCheck 
} from '@fortawesome/free-solid-svg-icons';

export default function Fillteroffcanvas():any {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(100);
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = ['All', 'Electronics', 'Clothing', 'Home & Living', 'Books'];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">Store Front</h1>
        
        {/* Trigger Button */}
        <button
          onClick={():void => setIsOpen(true)}
          className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full font-medium text-sm active:scale-95 transition-transform"
        >
          <FontAwesomeIcon icon={faSliders} className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </header>

      {/* Main Content Placeholder */}
      <main className="p-4 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-slate-500">Showing results for <span className="font-semibold text-slate-900">{selectedCategory}</span></p>
        </div>

        {/* Dummy Grid */}
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-full h-32 bg-slate-100 rounded-xl mb-3 flex items-center justify-center text-slate-400 text-xs">
                Product Image
              </div>
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-slate-100 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Offcanvas Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative bg-white w-full rounded-t-3xl p-6 shadow-2xl max-h-[85vh] flex flex-col z-10 animate-in slide-in-from-bottom duration-300">
            {/* Grab Handle */}
            <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
              <h2 className="text-lg font-bold">Filters</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 flex items-center justify-center w-8 h-8"
              >
                <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto space-y-6 flex-1 pr-1">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors flex items-center gap-1.5 ${
                        selectedCategory === cat
                          ? 'bg-slate-900 text-white font-medium'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {selectedCategory === cat && <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />}
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <label className="font-semibold">Max Price</label>
                  <span className="text-slate-500">${priceRange}</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-slate-900 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Toggle Option */}
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-semibold">In Stock Only</span>
                <button
                  type="button"
                  onClick={() => setInStockOnly(!inStockOnly)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    inStockOnly ? 'bg-slate-900' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      inStockOnly ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="pt-4 mt-4 border-t border-slate-100 flex gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setPriceRange(500);
                  setInStockOnly(false);
                }}
                className="flex-1 py-3 text-slate-600 font-medium border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}