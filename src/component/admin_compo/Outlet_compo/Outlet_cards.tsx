import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStore, 
  faCircleCheck, 
  faClipboardList, 
  faCircleXmark 
} from '@fortawesome/free-solid-svg-icons';
export default function Outlet_cards() {
 const stats = [
    {
      title: 'TOTAL OUTLETS',
      value: '48',
      trend: '+12%',
      trendColor: 'text-blue-400',
      icon: faStore,
      iconColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
    {
      title: 'ACTIVE OUTLETS',
      value: '42',
      trend: 'Stable',
      trendColor: 'text-green-400',
      icon: faCircleCheck,
      iconColor: 'text-green-400 bg-green-500/10 border-green-500/20',
    },
    {
      title: 'PENDING OUTLETS',
      value: '04',
      trend: 'In Review',
      trendColor: 'text-amber-400',
      icon: faClipboardList,
      iconColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      title: 'CLOSED OUTLETS',
      value: '02',
      trend: '-1%',
      trendColor: 'text-red-400',
      icon: faCircleXmark,
      iconColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    },
  ];

  return (
    <div className="mb-4   flex items-center justify-center w-full font-sans antialiased">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7.5xl">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-[#131b2e] border border-[#1e293b] rounded-2xl p-6 flex flex-col justify-between h-40 transition-all duration-300 hover:border-[#334155] hover:shadow-xl"
            >
              {/* Header: Title and Icon */}
              <div className="flex justify-between items-start">
                <span className="text-[#64748b] text-xs font-semibold tracking-widest uppercase">
                  {stat.title}
                </span>
                <div className={`p-2.5 rounded-lg border ${stat.iconColor}`}>
                  <FontAwesomeIcon icon={Icon} className="w-5 h-5" />
                </div>
              </div>
              
              {/* Footer: Value and Trend */}
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-white text-3xl font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className={`text-sm font-medium ${stat.trendColor}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
