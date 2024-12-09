import React from 'react';
import Afghanistan from '../assets/afghanistan.png';
import ÅlandIslands from '../assets/Åland-Islands.jpg';
import Albania from '../assets/Albania.jpg';
import Algeria from '../assets/algeria.jpg';

function Section() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Afghanistan}
            alt="Afghanistan"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Afghanistan</h2>
            <h3 className="text-lg">
              Population: <span className="text-gray-600">27,657,145</span>
            </h3>
            <h4 className="text-lg">
              Region: <span className="text-gray-600">Asia</span>
            </h4>
            <h6 className="text-lg">
              Capital: <span className="text-gray-600">Kabul</span>
            </h6>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={ÅlandIslands}
            alt="Åland Islands"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Åland Islands</h2>
            <h3 className="text-lg">
              Population: <span className="text-gray-600">28,875</span>
            </h3>
            <h4 className="text-lg">
              Region: <span className="text-gray-600">Europe</span>
            </h4>
            <h6 className="text-lg">
              Capital: <span className="text-gray-600">Mariehamn</span>
            </h6>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Albania}
            alt="Albania"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Albania</h2>
            <h3 className="text-lg">
              Population: <span className="text-gray-600">2,886,026</span>
            </h3>
            <h4 className="text-lg">
              Region: <span className="text-gray-600">Europe</span>
            </h4>
            <h6 className="text-lg">
              Capital: <span className="text-gray-600">Tirana</span>
            </h6>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={Algeria}
            alt="Algeria"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">Algeria</h2>
            <h3 className="text-lg">
              Population: <span className="text-gray-600">40,400,000</span>
            </h3>
            <h4 className="text-lg">
              Region: <span className="text-gray-600">Africa</span>
            </h4>
            <h6 className="text-lg">
              Capital: <span className="text-gray-600">Algiers</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
