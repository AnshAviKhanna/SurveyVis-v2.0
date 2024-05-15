import DropdownCat from './DropdownCat';
import DropdownGroupedCat from './DropdownGroupedCat';
import DropdownNum from './DropdownNum';
import Visualization from './Visualization';
import data from '../../../data/data.json';
import { ParallelCoordinate } from './ParallelCoordinate';
import {Barplot} from './Barplot';
import { Button } from '@material-tailwind/react';

const PCP = () => {
    // console.log(data);
    const data = 
[
  {
    CASEID: 10010139902,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010135702,
    V102: 0,
    V106: 0,
    V113: 1
  },
  {
    CASEID: 10010139502,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010135804,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010138002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010302204,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010309802,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010308502,
    V102: 0,
    V106: 3,
    V113: 0
  },
  {
    CASEID: 10010302002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010061804,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010065002,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010061604,
    V102: 0,
    V106: 2,
    V113: 0
  },
  {
    CASEID: 10010069002,
    V102: 0,
    V106: 0,
    V113: 0
  },
  {
    CASEID: 10010316703,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010313802,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010314802,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010318002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010311404,
    V102: 0,
    V106: 3,
    V113: 1
  },
  {
    CASEID: 10010311204,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010298602,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010298502,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010294502,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010296604,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010296604,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010297804,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010297804,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010299802,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010094002,
    V102: 0,
    V106: 3,
    V113: 0
  },
  {
    CASEID: 10010091002,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010091002,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010091402,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010096702,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010092802,
    V102: 0,
    V106: 2,
    V113: 0
  },
  {
    CASEID: 10010092602,
    V102: 0,
    V106: 3,
    V113: 0
  },
  {
    CASEID: 10010094302,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010094502,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010097502,
    V102: 0,
    V106: 0,
    V113: 0
  },
  {
    CASEID: 10010097502,
    V102: 0,
    V106: 0,
    V113: 0
  },
  {
    CASEID: 10010406803,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010401309,
    V102: 0,
    V106: 2,
    V113: 0
  },
  {
    CASEID: 10010403002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010407204,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010408904,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010408904,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010408908,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010408804,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010400704,
    V102: 0,
    V106: 3,
    V113: 0
  },
  {
    CASEID: 10010400709,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010403507,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010407702,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010021402,
    V102: 0,
    V106: 0,
    V113: 1
  },
  {
    CASEID: 10010021402,
    V102: 0,
    V106: 0,
    V113: 1
  },
  {
    CASEID: 10010020104,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010023404,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010027904,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010027904,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010027604,
    V102: 0,
    V106: 2,
    V113: 1
  },
  {
    CASEID: 10010027002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010027002,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010024404,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010025402,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010217402,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010211504,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010213304,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010214004,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010210402,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010074602,
    V102: 0,
    V106: 3,
    V113: 0
  },
  {
    CASEID: 10010075802,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010075004,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010075502,
    V102: 0,
    V106: 0,
    V113: 0
  },
  {
    CASEID: 10010071203,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010372202,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010379904,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010374503,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010374004,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010379803,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010376202,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010376202,
    V102: 0,
    V106: 1,
    V113: 1
  },
  {
    CASEID: 10010372902,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010375704,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010375704,
    V102: 0,
    V106: 1,
    V113: 0
  },
  {
    CASEID: 10010276202,
    V102: 0,
    V106: 1,
    V113: 1
  },]
  // const data=[
  //   { "sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.9, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.7, "sepalWidth": 3.2, "petalLength": 1.3, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.6, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.6, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.9, "petalLength": 1.7, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 4.6, "sepalWidth": 3.4, "petalLength": 1.4, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.4, "sepalWidth": 2.9, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.9, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.1, "group": "setosa" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.8, "sepalWidth": 3.4, "petalLength": 1.6, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.8, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.1, "group": "setosa" },
  //   { "sepalLength": 4.3, "sepalWidth": 3.0, "petalLength": 1.1, "petalWidth": 0.1, "group": "setosa" },
  //   { "sepalLength": 5.8, "sepalWidth": 4.0, "petalLength": 1.2, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.7, "sepalWidth": 4.4, "petalLength": 1.5, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.9, "petalLength": 1.3, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 5.7, "sepalWidth": 3.8, "petalLength": 1.7, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.5, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.4, "petalLength": 1.7, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 4.6, "sepalWidth": 3.6, "petalLength": 1.0, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.3, "petalLength": 1.7, "petalWidth": 0.5, "group": "setosa" },
  //   { "sepalLength": 4.8, "sepalWidth": 3.4, "petalLength": 1.9, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.0, "petalLength": 1.6, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.4, "petalLength": 1.6, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 5.2, "sepalWidth": 3.5, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.2, "sepalWidth": 3.4, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.7, "sepalWidth": 3.2, "petalLength": 1.6, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.8, "sepalWidth": 3.1, "petalLength": 1.6, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 5.2, "sepalWidth": 4.1, "petalLength": 1.5, "petalWidth": 0.1, "group": "setosa" },
  //   { "sepalLength": 5.5, "sepalWidth": 4.2, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.9, "sepalWidth": 3.1, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.2, "petalLength": 1.2, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.5, "sepalWidth": 3.5, "petalLength": 1.3, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.9, "sepalWidth": 3.6, "petalLength": 1.4, "petalWidth": 0.1, "group": "setosa" },
  //   { "sepalLength": 4.4, "sepalWidth": 3.0, "petalLength": 1.3, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.4, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.5, "petalLength": 1.3, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 4.5, "sepalWidth": 2.3, "petalLength": 1.3, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 4.4, "sepalWidth": 3.2, "petalLength": 1.3, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.5, "petalLength": 1.6, "petalWidth": 0.6, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.9, "petalWidth": 0.4, "group": "setosa" },
  //   { "sepalLength": 4.8, "sepalWidth": 3.0, "petalLength": 1.4, "petalWidth": 0.3, "group": "setosa" },
  //   { "sepalLength": 5.1, "sepalWidth": 3.8, "petalLength": 1.6, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 4.6, "sepalWidth": 3.2, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.3, "sepalWidth": 3.7, "petalLength": 1.5, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 5.0, "sepalWidth": 3.3, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  //   { "sepalLength": 7.0, "sepalWidth": 3.2, "petalLength": 4.7, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 6.4, "sepalWidth": 3.2, "petalLength": 4.5, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 4.9, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 5.5, "sepalWidth": 2.3, "petalLength": 4.0, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.5, "sepalWidth": 2.8, "petalLength": 4.6, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 5.7, "sepalWidth": 2.8, "petalLength": 4.5, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.3, "sepalWidth": 3.3, "petalLength": 4.7, "petalWidth": 1.6, "group": "versicolor" },
  //   { "sepalLength": 4.9, "sepalWidth": 2.4, "petalLength": 3.3, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 6.6, "sepalWidth": 2.9, "petalLength": 4.6, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.2, "sepalWidth": 2.7, "petalLength": 3.9, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 5.0, "sepalWidth": 2.0, "petalLength": 3.5, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 5.9, "sepalWidth": 3.0, "petalLength": 4.2, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 6.0, "sepalWidth": 2.2, "petalLength": 4.0, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 6.1, "sepalWidth": 2.9, "petalLength": 4.7, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 5.6, "sepalWidth": 2.9, "petalLength": 3.6, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 4.4, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 5.6, "sepalWidth": 3.0, "petalLength": 4.5, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 4.1, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 6.2, "sepalWidth": 2.2, "petalLength": 4.5, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 5.6, "sepalWidth": 2.5, "petalLength": 3.9, "petalWidth": 1.1, "group": "versicolor" },
  //   { "sepalLength": 5.9, "sepalWidth": 3.2, "petalLength": 4.8, "petalWidth": 1.8, "group": "versicolor" },
  //   { "sepalLength": 6.1, "sepalWidth": 2.8, "petalLength": 4.0, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.5, "petalLength": 4.9, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 6.1, "sepalWidth": 2.8, "petalLength": 4.7, "petalWidth": 1.2, "group": "versicolor" },
  //   { "sepalLength": 6.4, "sepalWidth": 2.9, "petalLength": 4.3, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.6, "sepalWidth": 3.0, "petalLength": 4.4, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 6.8, "sepalWidth": 2.8, "petalLength": 4.8, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.0, "petalLength": 5.0, "petalWidth": 1.7, "group": "versicolor" },
  //   { "sepalLength": 6.0, "sepalWidth": 2.9, "petalLength": 4.5, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 5.7, "sepalWidth": 2.6, "petalLength": 3.5, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 5.5, "sepalWidth": 2.4, "petalLength": 3.8, "petalWidth": 1.1, "group": "versicolor" },
  //   { "sepalLength": 5.5, "sepalWidth": 2.4, "petalLength": 3.7, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 3.9, "petalWidth": 1.2, "group": "versicolor" },
  //   { "sepalLength": 6.0, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.6, "group": "versicolor" },
  //   { "sepalLength": 5.4, "sepalWidth": 3.0, "petalLength": 4.5, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 6.0, "sepalWidth": 3.4, "petalLength": 4.5, "petalWidth": 1.6, "group": "versicolor" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 4.7, "petalWidth": 1.5, "group": "versicolor" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.3, "petalLength": 4.4, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.6, "sepalWidth": 3.0, "petalLength": 4.1, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.5, "sepalWidth": 2.5, "petalLength": 4.0, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.5, "sepalWidth": 2.6, "petalLength": 4.4, "petalWidth": 1.2, "group": "versicolor" },
  //   { "sepalLength": 6.1, "sepalWidth": 3.0, "petalLength": 4.6, "petalWidth": 1.4, "group": "versicolor" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.6, "petalLength": 4.0, "petalWidth": 1.2, "group": "versicolor" },
  //   { "sepalLength": 5.0, "sepalWidth": 2.3, "petalLength": 3.3, "petalWidth": 1.0, "group": "versicolor" },
  //   { "sepalLength": 5.6, "sepalWidth": 2.7, "petalLength": 4.2, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.7, "sepalWidth": 3.0, "petalLength": 4.2, "petalWidth": 1.2, "group": "versicolor" },
  //   { "sepalLength": 5.7, "sepalWidth": 2.9, "petalLength": 4.2, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.2, "sepalWidth": 2.9, "petalLength": 4.3, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 5.1, "sepalWidth": 2.5, "petalLength": 3.0, "petalWidth": 1.1, "group": "versicolor" },
  //   { "sepalLength": 5.7, "sepalWidth": 2.8, "petalLength": 4.1, "petalWidth": 1.3, "group": "versicolor" },
  //   { "sepalLength": 6.3, "sepalWidth": 3.3, "petalLength": 6.0, "petalWidth": 2.5, "group": "virginica" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.9, "group": "virginica" },
  //   { "sepalLength": 7.1, "sepalWidth": 3.0, "petalLength": 5.9, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.9, "petalLength": 5.6, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.8, "petalWidth": 2.2, "group": "virginica" },
  //   { "sepalLength": 7.6, "sepalWidth": 3.0, "petalLength": 6.6, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 4.9, "sepalWidth": 2.5, "petalLength": 4.5, "petalWidth": 1.7, "group": "virginica" },
  //   { "sepalLength": 7.3, "sepalWidth": 2.9, "petalLength": 6.3, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.7, "sepalWidth": 2.5, "petalLength": 5.8, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 7.2, "sepalWidth": 3.6, "petalLength": 6.1, "petalWidth": 2.5, "group": "virginica" },
  //   { "sepalLength": 6.5, "sepalWidth": 3.2, "petalLength": 5.1, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 6.4, "sepalWidth": 2.7, "petalLength": 5.3, "petalWidth": 1.9, "group": "virginica" },
  //   { "sepalLength": 6.8, "sepalWidth": 3.0, "petalLength": 5.5, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 5.7, "sepalWidth": 2.5, "petalLength": 5.0, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.8, "petalLength": 5.1, "petalWidth": 2.4, "group": "virginica" },
  //   { "sepalLength": 6.4, "sepalWidth": 3.2, "petalLength": 5.3, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.5, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 7.7, "sepalWidth": 3.8, "petalLength": 6.7, "petalWidth": 2.2, "group": "virginica" },
  //   { "sepalLength": 7.7, "sepalWidth": 2.6, "petalLength": 6.9, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 6.0, "sepalWidth": 2.2, "petalLength": 5.0, "petalWidth": 1.5, "group": "virginica" },
  //   { "sepalLength": 6.9, "sepalWidth": 3.2, "petalLength": 5.7, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 5.6, "sepalWidth": 2.8, "petalLength": 4.9, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 7.7, "sepalWidth": 2.8, "petalLength": 6.7, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.7, "petalLength": 4.9, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.3, "petalLength": 5.7, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 7.2, "sepalWidth": 3.2, "petalLength": 6.0, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.2, "sepalWidth": 2.8, "petalLength": 4.8, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.1, "sepalWidth": 3.0, "petalLength": 4.9, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.4, "sepalWidth": 2.8, "petalLength": 5.6, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 7.2, "sepalWidth": 3.0, "petalLength": 5.8, "petalWidth": 1.6, "group": "virginica" },
  //   { "sepalLength": 7.4, "sepalWidth": 2.8, "petalLength": 6.1, "petalWidth": 1.9, "group": "virginica" },
  //   { "sepalLength": 7.9, "sepalWidth": 3.8, "petalLength": 6.4, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 6.4, "sepalWidth": 2.8, "petalLength": 5.6, "petalWidth": 2.2, "group": "virginica" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.8, "petalLength": 5.1, "petalWidth": 1.5, "group": "virginica" },
  //   { "sepalLength": 6.1, "sepalWidth": 2.6, "petalLength": 5.6, "petalWidth": 1.4, "group": "virginica" },
  //   { "sepalLength": 7.7, "sepalWidth": 3.0, "petalLength": 6.1, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 6.3, "sepalWidth": 3.4, "petalLength": 5.6, "petalWidth": 2.4, "group": "virginica" },
  //   { "sepalLength": 6.4, "sepalWidth": 3.1, "petalLength": 5.5, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.0, "sepalWidth": 3.0, "petalLength": 4.8, "petalWidth": 1.8, "group": "virginica" },
  //   { "sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 5.4, "petalWidth": 2.1, "group": "virginica" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.1, "petalLength": 5.6, "petalWidth": 2.4, "group": "virginica" },
  //   { "sepalLength": 6.9, "sepalWidth": 3.1, "petalLength": 5.1, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 5.8, "sepalWidth": 2.7, "petalLength": 5.1, "petalWidth": 1.9, "group": "virginica" },
  //   { "sepalLength": 6.8, "sepalWidth": 3.2, "petalLength": 5.9, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.3, "petalLength": 5.7, "petalWidth": 2.5, "group": "virginica" },
  //   { "sepalLength": 6.7, "sepalWidth": 3.0, "petalLength": 5.2, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 6.3, "sepalWidth": 2.5, "petalLength": 5.0, "petalWidth": 1.9, "group": "virginica" },
  //   { "sepalLength": 6.5, "sepalWidth": 3.0, "petalLength": 5.2, "petalWidth": 2.0, "group": "virginica" },
  //   { "sepalLength": 6.2, "sepalWidth": 3.4, "petalLength": 5.4, "petalWidth": 2.3, "group": "virginica" },
  //   { "sepalLength": 5.9, "sepalWidth": 3.0, "petalLength": 5.1, "petalWidth": 1.8, "group": "virginica" }
  // ]
// const data2= [
//   {group:"Mark", subgroup: "travel",  value: 90},
//   {group:"Mark", subgroup: "food",  value: 23},
//   {group:"Mark", subgroup: "beer",  value: 14},
//   {group:"Robert", subgroup: "travel",  value: 12},
//   {group:"Robert", subgroup: "food",  value: 9},
//   {group:"Robert", subgroup: "beer",  value: 2},
//   {group:"Emily", subgroup: "travel",  value: 34},
//   {group:"Emily", subgroup: "food",  value: 0},
//   {group:"Emily", subgroup: "beer",  value: 4},
//   {group:"Marion", subgroup: "travel",  value: 53},
//   {group:"Marion", subgroup: "food",  value: 14},
//   {group:"Marion", subgroup: "beer",  value: 102},
//   {group:"Nicolas", subgroup: "travel",  value: 98},
//   {group:"Nicolas", subgroup: "food",  value: 9},
//   {group:"Nicolas", subgroup: "beer",  value: 8},
//   {group:"Mélanie", subgroup: "travel",  value: 23},
//   {group:"Mélanie", subgroup: "food",  value: 23},
//   {group:"Mélanie", subgroup: "beer",  value: 3},
//   {group:"Gabriel", subgroup: "travel",  value: 18},
//   {group:"Gabriel", subgroup: "food",  value: 11},
//   {group:"Gabriel", subgroup: "beer",  value: 18},
//   {group:"Jean", subgroup: "travel",  value: 104},
//   {group:"Jean", subgroup: "food",  value: 10},
//   {group:"Jean", subgroup: "beer",  value: 14},
//   {group:"Paul", subgroup: "travel",  value: 2},
//   {group:"Paul", subgroup: "food",  value: 12},
//   {group:"Paul", subgroup: "beer",  value: 92},
// ]
const data2=[{group:"V102", subgroup: "0",  value: 79.4},
{group:"V102", subgroup: "1",  value: 20.6},
{group:"V113", subgroup: "0",  value: 69.7},
{group:"V113", subgroup: "1",  value: 30.3},
{group:"V116", subgroup: "0",  value: 64.7},
{group:"V116", subgroup: "1",  value: 35.3},]
  const HEADER_HEIGHT = 60;
  return (
    <>
    <div className='mx-[5vw] flex justify-between'>
      <DropdownNum/>
      <DropdownCat/>
      <DropdownGroupedCat/>
      
    <div className='flex items-center'>
    <button
        id="dropdownBgHoverButton"
        // onClick={toggleDropdown}
        className="text-gray-700 py-1 px-1 mx-2 bg-transparent hover:text-blue-700 border border-gray-700 hover:border-blue-700 font-medium rounded-md text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        type="button"
      >
        Apply Changes
      </button>
      <button
        id="dropdownBgHoverButton"
        // onClick={toggleDropdown}
        className="text-gray-700 py-1 px-1 mx-2 bg-transparent hover:text-blue-700 border border-gray-700 hover:border-blue-700 font-medium rounded-md text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700"
        type="button"
      >
        Reset
      </button>
      </div>
      </div>
    
    {/* <Visualization data={data}/> */}
    <div className='grid grid-cols-2 gap-0'>
    <ParallelCoordinate

      data={data}
      width={700}
      height={400}
      variables={["CASEID","V102","V106","V113"]}
      // variables={["sepalLength", "sepalWidth", "petalLength", "petalWidth"]}
      axisRange={[[10010011002,369000000000],[0,1],[0,3],[0,1]]}
    />
    <Barplot data={data2} width={700} height={400 - HEADER_HEIGHT} />
    </div>
    
    </>
  );
};

export default PCP;
