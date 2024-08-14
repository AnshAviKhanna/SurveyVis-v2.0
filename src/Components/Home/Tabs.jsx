import React, { useState } from "react";
import PCP from "./PCP/PCP";
import Cartograph from "./Cartograph/Cartograph";
import Histogram from "./Histogram/Histogram";
import PSets from "./PSets/PSets";
import CorrelationMatrix from "./CorrelationMatirx/CorrelationMatrix";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('PCP');

  const renderComponent = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <ul className="hidden text-base font-medium text-center text-gray-700 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 md:mx-1">
        <li className="w-full focus-within:z-10">
          <a href="#" className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 rounded-s-lg ${activeTab === 'PCP' ? 'bg-blue-700 text-white' : 'hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'}`} onClick={() => renderComponent('PCP')}>Parallel Coordinates</a>
        </li>
        <li className="w-full focus-within:z-10">
          <a href="#" className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 ${activeTab === 'Cartograph' ? 'bg-blue-700 text-white' : 'hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'}`} onClick={() => renderComponent('Cartograph')}>Cartograph</a>
        </li>
        <li className="w-full focus-within:z-10">
          <a href="#" className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 ${activeTab === 'PSets' ? 'bg-blue-700 text-white' : 'hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'}`} onClick={() => renderComponent('PSets')}>Parallel Sets</a>
        </li>
        <li className="w-full focus-within:z-10">
          <a href="#" className={`inline-block w-full p-4 border-r border-gray-200 dark:border-gray-700 ${activeTab === 'Histogram' ? 'bg-blue-700 text-white' : 'hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'}`} onClick={() => renderComponent('Histogram')}>Histogram</a>
        </li>
        <li className="w-full focus-within:z-10">
          <a href="#" className={`inline-block w-full p-4 border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg ${activeTab === 'CorrelationMatrix' ? 'bg-blue-700 text-white' : 'hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-blue-700 focus:text-white dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'}`} onClick={() => renderComponent('CorrelationMatrix')}>Correlation Matrix</a>
        </li>
      </ul>
      <div className="mt-4">
        {activeTab === 'PCP' && <PCP />}
        {activeTab === 'Cartograph' && <Cartograph />}
        {activeTab === 'Histogram' && <Histogram />}
        {activeTab === 'PSets' && <PSets />}
        {activeTab === 'CorrelationMatrix' && <CorrelationMatrix />}
      </div>
    </div>
  );
};

export default Tabs;
