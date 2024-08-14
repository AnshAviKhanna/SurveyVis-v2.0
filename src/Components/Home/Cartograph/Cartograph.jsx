import 'leaflet/dist/leaflet.css';
import Heatmap from './Heatmap';
import DropdownNum from './DropdownNum';
import DropdownCat from './DropdownCat';
const Cartograph = () => {
  return (
    <div>
      <div className='mx-[30vw] flex justify-between mb-4'>
      <DropdownNum/>
      <DropdownCat/>
      </div>
      <Heatmap/>
    </div>
  );
};

export default Cartograph;
