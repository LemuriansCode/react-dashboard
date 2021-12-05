import React from 'react'  
import MaterialTable from 'material-table'

export const Tables2 = ()=>{
    const data=[
        {crop:'Corn', cropdensity:12, changes:"30%", date:'22/10/2021'},
        {crop:'Rice', cropdensity:22, changes:"40%", date:'22/10/2021'},
        {crop:'Millet', cropdensity:23, changes:"50%", date:'22/10/2021'},
        {crop:'Barley', cropdensity:11, changes:"60%", date:'22/10/2021'},
    ]
    const columns=[
        {
            title:'Crop',field:'crop'
        },
        {
            title:'Cropdensity',field:'cropdensity'
        },
        {
            title:'Changes',field:'changes'
        },
        {
            title:'Date',field:'date'
        }

    ]
    return(
        <div>
            <MaterialTable title=" "
            data={data}
            columns={columns}
            options={
                {
                    filtering:true
                }
            }
            
            />
            
        </div>
    )
}