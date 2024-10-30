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
      name: 'Cannon Room',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 2, 
      name: 'Cross & Main',
      size: 'Large',
      costs: {
        redesign: 3000,
        analytics: 625,
        optimization: 600,
        content: 2600
      }
    },
    { 
      id: 3, 
      name: 'Field House Catering',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 4, 
      name: 'Founders Hall',
      size: 'Large',
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 5, 
      name: 'The Daily Planet Cafe',
      size: 'Large',
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 6, 
      name: 'The Millbrook Manor',
      size: 'Large',
      costs: {
        redesign: 2400,
        analytics: 625,
        optimization: 600,
        content: 3600
      }
    },
    { 
      id: 7, 
      name: 'The Revelry',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 8, 
      name: 'The Terrace at Cedar Hill',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 9, 
      name: 'Union Station Deli & Catering',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 10, 
      name: 'The VanLandingham Estate',
      size: 'Small',
      costs: {
        redesign: 1800,
        analytics: 625,
        optimization: 600,
        content: 4600
      }
    },
    { 
      id: 11, 
      name: 'Best Impressions Caterers',
      size: 'Large',
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
        [service.key]: false
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

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border text-left">Venue</th>
              <th className="p-2 border text-left">Size</th>
              {initialServices.map(service => (
                <th key={service.id} className="p-2 border text-left">
                  {service.name}
                </th>
              ))}
              <th className="p-2 border text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {initialVenues.map(venue => (
              <tr key={venue.id} className="hover:bg-gray-50">
                <td className="p-2 border font-medium">{venue.name}</td>
                <td className="p-2 border">{venue.size}</td>
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
                <td className="p-2 border font-bold">
                  ${calculateVenueTotal(venue).toLocaleString()}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-100 font-bold">
              <td className="p-2 border">Grand Total</td>
              <td colSpan={initialServices.length + 1} className="p-2 border"></td>
              <td className="p-2 border">${calculateGrandTotal().toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calculator;