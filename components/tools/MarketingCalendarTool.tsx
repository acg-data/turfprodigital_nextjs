'use client';

import { useState } from 'react';
import { 
  CalendarDays, 
  Leaf, 
  Sun, 
  Snowflake, 
  Flower2,
  Megaphone,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Info
} from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  month: number;
  type: 'acquisition' | 'retention' | 'promotion';
  description: string;
  icon: typeof Leaf;
  color: string;
}

const campaigns: Campaign[] = [
  {
    id: '1',
    name: 'Spring Cleanup Early Bird',
    month: 1,
    type: 'acquisition',
    description: 'Offer early booking discounts for spring services',
    icon: Flower2,
    color: 'bg-pink-500'
  },
  {
    id: '2',
    name: 'Spring Kickoff Campaign',
    month: 2,
    type: 'acquisition',
    description: 'Launch spring services, fertilization, aeration',
    icon: Leaf,
    color: 'bg-emerald-500'
  },
  {
    id: '3',
    name: 'Mowing Season Start',
    month: 3,
    type: 'acquisition',
    description: 'Weekly mowing service promotions',
    icon: Sun,
    color: 'bg-amber-500'
  },
  {
    id: '4',
    name: 'Summer Maintenance',
    month: 5,
    type: 'retention',
    description: 'Lawn health tips, irrigation services',
    icon: Sun,
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Mid-Season Check-in',
    month: 6,
    type: 'retention',
    description: 'Customer satisfaction surveys, upsells',
    icon: Info,
    color: 'bg-blue-500'
  },
  {
    id: '6',
    name: 'Fall Cleanup Prep',
    month: 7,
    type: 'promotion',
    description: 'Early booking for fall services',
    icon: Leaf,
    color: 'bg-amber-600'
  },
  {
    id: '7',
    name: 'Fall Services Launch',
    month: 8,
    type: 'acquisition',
    description: 'Leaf removal, aeration, overseeding',
    icon: Leaf,
    color: 'bg-orange-600'
  },
  {
    id: '8',
    name: 'Winterization Campaign',
    month: 9,
    type: 'acquisition',
    description: 'Final mows, winter prep services',
    icon: Snowflake,
    color: 'bg-cyan-500'
  },
  {
    id: '9',
    name: 'Holiday Lighting',
    month: 10,
    type: 'promotion',
    description: 'Christmas light installation services',
    icon: Snowflake,
    color: 'bg-red-500'
  },
  {
    id: '10',
    name: 'Snow Removal Booking',
    month: 11,
    type: 'promotion',
    description: 'Pre-season snow removal contracts',
    icon: Snowflake,
    color: 'bg-blue-600'
  }
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export default function MarketingCalendarTool() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const getCampaignsForMonth = (month: number) => {
    return campaigns.filter(c => c.month === month);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'acquisition':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'retention':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'promotion':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'acquisition':
        return 'Customer Acquisition';
      case 'retention':
        return 'Customer Retention';
      case 'promotion':
        return 'Special Promotion';
      default:
        return type;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-lg">
            <CalendarDays className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Marketing Calendar Tool</h3>
        </div>
        <p className="text-rose-100">
          Plan your seasonal marketing campaigns. Never miss a key promotional period for your lawn care business.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setCurrentMonth(m => m === 0 ? 11 : m - 1)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h4 className="text-xl font-bold text-slate-900">{months[currentMonth]} 2026</h4>
            <button
              onClick={() => setCurrentMonth(m => m === 11 ? 0 : m + 1)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Month Grid */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="text-center text-xs font-semibold text-slate-400 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 2; // Offset for January 2026 starting on Thursday
              const isCurrentMonth = day >= 0 && day < 31;
              const monthCampaigns = getCampaignsForMonth(currentMonth);
              
              return (
                <div
                  key={i}
                  className={`
                    aspect-square rounded-lg border p-1 flex flex-col items-center justify-center relative
                    ${isCurrentMonth ? 'bg-white border-slate-200' : 'bg-slate-50 border-transparent'}
                  `}
                >
                  {isCurrentMonth && (
                    <>
                      <span className="text-sm text-slate-700">{day + 1}</span>
                      {monthCampaigns.length > 0 && day === 1 && (
                        <div className="absolute bottom-1 flex gap-0.5">
                          {monthCampaigns.map((_, idx) => (
                            <div key={idx} className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/* Campaigns for Current Month */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <h5 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-rose-500" />
              Campaigns for {months[currentMonth]}
            </h5>
            {getCampaignsForMonth(currentMonth).length === 0 ? (
              <p className="text-slate-500 text-sm">No major campaigns scheduled this month. Focus on maintenance and customer service.</p>
            ) : (
              <div className="space-y-3">
                {getCampaignsForMonth(currentMonth).map(campaign => (
                  <button
                    key={campaign.id}
                    onClick={() => setSelectedCampaign(campaign)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-rose-300 hover:bg-rose-50/50 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`${campaign.color} p-2 rounded-lg text-white`}>
                        <campaign.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-slate-900">{campaign.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(campaign.type)}`}>
                            {getTypeLabel(campaign.type)}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{campaign.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Campaign Types Legend */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-slate-200">
            <h5 className="font-bold text-slate-900 mb-4">Campaign Types</h5>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-sm text-slate-600">Customer Acquisition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-sm text-slate-600">Customer Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-sm text-slate-600">Special Promotion</span>
              </div>
            </div>
          </div>

          {/* Upcoming Campaigns */}
          <div className="bg-white rounded-xl shadow-md p-5 border border-slate-200">
            <h5 className="font-bold text-slate-900 mb-4">Next 3 Months</h5>
            <div className="space-y-3">
              {[0, 1, 2].map(offset => {
                const month = (currentMonth + offset) % 12;
                const monthCampaigns = getCampaignsForMonth(month);
                
                return (
                  <div key={month} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="text-sm font-medium text-slate-700">{months[month]}</span>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                      {monthCampaigns.length} campaigns
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl shadow-md p-5 text-white">
            <h5 className="font-bold mb-4">Annual Overview</h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-rose-100 text-sm">Total Campaigns</span>
                <span className="font-bold text-xl">{campaigns.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-rose-100 text-sm">Acquisition</span>
                <span className="font-bold">{campaigns.filter(c => c.type === 'acquisition').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-rose-100 text-sm">Retention</span>
                <span className="font-bold">{campaigns.filter(c => c.type === 'retention').length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-rose-100 text-sm">Promotions</span>
                <span className="font-bold">{campaigns.filter(c => c.type === 'promotion').length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCampaign(null)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full animate-fade-in-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${selectedCampaign.color} p-3 rounded-xl text-white`}>
                <selectedCampaign.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{selectedCampaign.name}</h4>
                <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(selectedCampaign.type)}`}>
                  {getTypeLabel(selectedCampaign.type)}
                </span>
              </div>
            </div>
            
            <p className="text-slate-600 mb-6">{selectedCampaign.description}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Set up tracking pixels</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Create landing page</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Prepare ad creatives</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Schedule email campaign</span>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedCampaign(null)}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-6 border border-slate-200 text-center">
        <h4 className="text-lg font-bold text-slate-900 mb-2">Need Help Planning Your Campaigns?</h4>
        <p className="text-slate-600 mb-4">
          Get a custom marketing calendar tailored to your business goals and service area.
        </p>
        <a 
          href="/#contact" 
          className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/30 transition-all"
        >
          Get Custom Calendar
        </a>
      </div>
    </div>
  );
}
