import React from 'react';

export const Variable = "sepalLength" | "sepalWidth" | "petalLength" | "petalWidth";

// const DataItem<T extends string> = {
//   [key in T]: number;
// } & {
//   group: string;
// };

// export const Data = DataItem<Variable>[];

export const Data = [
  { "sepalLength": 5.1, "sepalWidth": 3.5, "petalLength": 1.4, "petalWidth": 0.2, "group": "setosa" },
  // Add the rest of the data...
];

// const YourComponent = () => {
//   return (
//     <div>
//       {/* Your component code here */}
//     </div>
//   );
// };

// export default YourComponent;
