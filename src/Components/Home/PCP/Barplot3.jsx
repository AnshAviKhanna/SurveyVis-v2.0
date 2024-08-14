import React from "react";
import Chart from 'react-apexcharts';

function Barplot3()
{
    return(
        <React.Fragment>
            <div className="container-fluid mb-3">
                {/* */}
                <Chart
                type="bar"
                width={700}
                height={360}
                series={[
                    
                    //row - 1
                    {
                        name: 'Rural-focus',
                        group: 'focus',
                        data: [79.4]
                      },
                      {
                        name: 'Rural-context',
                        group: 'context',
                        data: [79.4]
                      },
                      {
                        name: 'Urban-focus',
                        group: 'focus',
                        data: [20.6]
                      },
                      {
                        name: 'Urban-context',
                        group: 'context',
                        data: [20.6]
                      },
                      //row - 2
                      {
                        name: 'Un-Protected water-focus',
                        group: 'focus',
                        data: [null, 69.7]
                      },
                      {
                        name: 'Un-Protected water-context',
                        group: 'context',
                        data: [null, 69.7]
                      },
                      {
                        name: 'Protected water focus',
                        group: 'focus',
                        data: [null, 30.3]
                      },
                      {
                        name: 'Protected water context',
                        group: 'context',
                        data: [null, 30.3]
                      },
                      //row - 3
                      {
                        name: 'Improved Sanitation focus',
                        group: 'focus',
                        data: [null, null, 64.7]
                      },
                      {
                        name: ' Improved Sanitation context',
                        group: 'context',
                        data: [null, null, 64.7]
                      },
                      {
                        name: 'No improved sanitation focus',
                        group: 'focus',
                        data: [null, null, 35.3]
                      },
                      {
                        name: 'No improved sanitation context',
                        group: 'context',
                        data: [null, null, 35.3]
                      },
                ]}

                options={{
                    title:{
                        text:""
                    },
                    chart:{
                        type:'bar',
                        stacked:true,
                    },
                    plotOptions:{
                        bar:{
                            horizontal:true,
                            
                          }
                    },
                    stroke: {
                        width: 1,
                    },
                    xaxis:{
                        categories: [
                          'V102','V113','V116',
                        ],
                        labels: {
                          formatter: (val) => {
                            return val / 1 + '%'
                          }
                        }
                      },
                    yaxis:{
                        title:{
                            text:"Data in (%)"
                        },
                    },
                    legend:{
                        show:false,
                    },
                    dataLabels:{
                        formatter: (val) => {
                            return val / 1 + '%'
                          }
                    },
                    // colors:['#F44336', '#E91E63', '#9C27B0'],
                    grid: {
                        show:true,
                        xaxis:{
                            lines:{
                                show:false
                            }
                        },
                        yaxis:{
                            lines:{
                                show:false
                            }
                        }

                    }

                }}

                />
            </div>
        </React.Fragment>
    );
}
export {Barplot3};