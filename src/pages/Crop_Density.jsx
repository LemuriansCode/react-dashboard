
import React from 'react'
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import  Table  from '../components/table/Table';
const chartOptions = {
  series: [{
    name: 'Corn',
    data: [766, 655, 455, 340, 893, 875,436,750,346,964,200,1995]
  }, {
    name: 'Rice',
    data: [465, 605, 707, 673, 908, 805,803,656,807, 913, 2001]
  },
  {
    name: 'Millet',
    data: [235, 576, 464, 896, 300, 2632,400,555,564, 456, 124]
  }
  ,
  {
    name: 'Barley',
    data: [450, 370, 550, 790, 860, 400,807,590,445, 519, 1711]
  }],
  options: {
    color:['#63DD29','#3EA00F' ],
    chart: {
      background: 'transparent'
    },
    datalabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    }, 
    xaxis: {
      categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug', 'Sep','Oct','Nov','Dec']
    },
    legend: {
      position:'top'
    },
    grid: {
      show: false
    }
  }
}
const topCustomers = {
  head: [
        'Crops',
        'Maximum Count',
        'Minimum Count'
  ],
  body: [
  {
        "crop" : "Corn",
        "max" : "490",
        "min" : "23,000"
  },
  {
    "crop" : "Rice",
    "max" : "490",
    "min" : "23,000"
    
},
{
  "crop" : "Millet",
  "max" : "490",
  "min" : "23,000"
},
{
  "crop" : "Barley",
   "max" : "490",
  "min" : "23,000"
}
  ]

}
const renderCustomerHead = (item, index) => (
    <th key={index}> {item}</th>
)


const renderCustomerBody = (item, index) => (
  <tr key={index} >
    <td>{item.crop}</td>
    <td>{item.max}</td>
    <td>{item.min}</td>
  </tr>
)

const lastWeekCrops = {
  head: [
    'Crops',
    'Maximum Count',
    'Minimum Count',
    'Date'
],
body: [
{
    "crop" : "Corn",
    "max" : "490",
    "min" : "23,000",
    "Date" : "17 Jun 2021"
},
{
"crop" : "Rice",
"max" : "490",
"min" : "23,000",
"Date" : "15 Jun 2021"

},
{
"crop" : "Millet",
"max" : "490",
"min" : "23,000",
"Date" : "12 Jun 2021"
},
{
"crop" : "Barley",
"max" : "490",
"min" : "23,000",
"Date" : "20 Jun 2021"
}
]
}

const renderWeekCropsHead = (item,index) => (
  <th key={index}> {item}</th>
)
const renderWeekCropsBody = (item, index) => (
  <tr key={index} >
    <td>{item.crop}</td>
    <td>{item.max}</td>
    <td>{item.min}</td>
    <td>{item.Date}</td>
  </tr>
)
const Crop_Density = () => {
  return (
    <div>
       <h2 className="page-header">Crop Density</h2>
       <div className="row">
         <div className="col-6">
           <div className="row">
             {
               statusCards.map((item,index) =>(
                 <div className="col-6"> 
                   <StatusCard
                     
                     count={item.count}
                     title={item.title}
                 />
                 </div>
               ))
             }
           </div>
         </div>
            <div className="col-6">
              <div className="card full-height">

                <Chart
                 options={chartOptions.options}
                 series={chartOptions.series}
                 type='line'
                 height='100%'
                />
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card__header">
                   <h3>Last one year counts</h3>
                </div>
                <div className="card__body">
                   <Table
                     
                   headData = {topCustomers.head}
                   renderHead = {(item,index) => renderCustomerHead(item, index)}               
                   bodyData = {topCustomers.body}
                   renderBody = {(item,index) => renderCustomerBody(item, index)}  

                      />
                </div>
                <div className="card__footer">
                  <Link to='/' >View All</Link>
                </div>
              </div>
            </div>
             <div className="col-8">
               <div className="card">
                 <div className="card__header">
                   <h3>Last week counts</h3>
                 </div>
                 <div className="card__body">
                   <Table
                     

                   headData = {lastWeekCrops.head}
                   renderHead = {(item,index) => renderWeekCropsHead(item, index)}               
                   bodyData = {lastWeekCrops.body}
                   renderBody = {(item,index) => renderWeekCropsBody(item, index)}  
                     
                   />
                 </div>
                 <div className="card__footer">
                   <Link to='/'>View All</Link>
                 </div>
               </div>
             </div>
       </div>
    </div>
  )
}

export default Crop_Density
