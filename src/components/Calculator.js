import React, { useState } from 'react';

const Calculator = () => {
  const initialServices = [
    { id: 1, name: 'Squarespace Redesign', key: 'redesign' },
    { id: 2, name: 'Analytics Integration', key: 'analytics' },
    { id: 3, name: 'Local Optimizations', key: 'optimization' },
    { id: 4, name: 'Additional Content', key: 'content' }
  ];

  const initialVenues = [
    { 
      id: 1, 
      name: <>Cannon Room</>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 2, 
      name: <>Cross & Main <span className="text-xs text-gray-500">[WP]</span></>,
      costs: {
        redesign: 3000,
        analytics: 625,
        optimization: 600,
        content: 2600
      }
    },
    { 
      id: 3, 
      name: <>Field House Catering <span className="text-xs text-gray-500">[WP]</span></>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 4, 
      name: <>Founders Hall</>,
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 5, 
      name: <>The Daily Planet Cafe <span className="text-xs text-gray-500">[WP]</span></>,
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 6, 
      name: <>The Millbrook Manor <span className="text-xs text-gray-500">[WP]</span></>,
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 7, 
      name: <>The Revelry</>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 8, 
      name: <>The Terrace at Cedar Hill</>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 9, 
      name: <>Union Station Deli & Catering <span className="text-xs text-gray-500">[WP]</span></>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 10, 
      name: <>The VanLandingham Estate</>,
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 11, 
      name: <>Best Impressions Caterers</>,
      costs: {
        redesign: 8400,
        analytics: 750,
        optimization: 600,
        content: 2400
      }
    }
  ];

  const [selectedServices, setSelectedServices] = useState(
    initialVenues.reduce((acc, venue) => ({
      ...acc,
      [venue.id]: initialServices.reduce((sAcc, service) => ({
        ...sAcc,
        [service.key]: service.key !== 'content'
      }), {})
    }), {})
  );

  const calculateVenueTotal = (venue) => {
    return initialServices.reduce((total, service) => {
      return total + (selectedServices[venue.id][service.key] ? venue.costs[service.key] : 0);
    }, 0);
  };

  const calculateGrandTotal = () => {
    return initialVenues.reduce((total, venue) => {
      return total + calculateVenueTotal(venue);
    }, 0);
  };

  const toggleService = (venueId, serviceKey) => {
    setSelectedServices(prev => ({
      ...prev,
      [venueId]: {
        ...prev[venueId],
        [serviceKey]: !prev[venueId][serviceKey]
      }
    }));
  };

  const selectAll = () => {
    setSelectedServices(
      initialVenues.reduce((acc, venue) => ({
        ...acc,
        [venue.id]: initialServices.reduce((sAcc, service) => ({
          ...sAcc,
          [service.key]: true
        }), {})
      }), {})
    );
  };

  const deselectAll = () => {
    setSelectedServices(
      initialVenues.reduce((acc, venue) => ({
        ...acc,
        [venue.id]: initialServices.reduce((sAcc, service) => ({
          ...sAcc,
          [service.key]: false
        }), {})
      }), {})
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-end mb-4 gap-4">
        <button
          onClick={selectAll}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Select All
        </button>
        <button
          onClick={deselectAll}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Deselect All
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border text-left">Venue</th>
              {initialServices.map(service => (
                <th key={service.id} className="p-2 border text-left">
                  {service.name}
                </th>
              ))}
              <th className="p-2 border text-left min-w-[112px]">Total</th>
            </tr>
          </thead>
          <tbody>
            {initialVenues.map(venue => (
              <tr key={venue.id} className="hover:bg-gray-50">
                <td className="p-2 border font-medium">{venue.name}</td>
                {initialServices.map(service => (
                  <td key={service.id} className="p-2 border">
                    <div className="flex items-center justify-between">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked={selectedServices[venue.id][service.key]}
                          onChange={() => toggleService(venue.id, service.key)}
                        />
                      </label>
                      <span className="text-sm text-gray-600">
                        ${venue.costs[service.key].toLocaleString()}
                      </span>
                    </div>
                  </td>
                ))}
                <td className="p-2 border font-bold min-w-[112px]">
                  ${calculateVenueTotal(venue).toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="p-2 border">Grand Total</td>
              <td colSpan={initialServices.length} className="p-2 border"></td>
              <td className="p-2 border min-w-[112px]">${calculateGrandTotal().toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;