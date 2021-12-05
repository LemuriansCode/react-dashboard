
import {ApolloClient, InMemoryCache, useQuery} from '@apollo/client';
import React from 'react'

import MaterialTable from 'material-table'
import { LOAD_USERS } from "../GraphQl/Queries/User";


const columns=[
  {
      title:'Username',field:'username'
  },
  {
      title:'Email',field:'email'
  },
  {
      title:'isActive',field:'isActive'
  }
  ,
  {
      title:'id',field:'id'
  }
] 
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://lumerians.herokuapp.com/graphql/'
});

function Employees() {

 
  const {data, loading, error} = useQuery(LOAD_USERS, {client});

 

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  
 

const userData = [];
  
const jsonToArray=data.users.edges.map((item, i) => {
userData.push( {
username: item.node.username,
email: item.node.email,
isActive : item.node.isActive,
id : item.node.id

}) 
  
}
)
    
 return (
    
    <div>
            <MaterialTable title=" "
             data={userData}
            columns={columns}
            options={
                {
                    filtering:true
                }
            }
            
            />
            
        </div>
  );
}


export default Employees;
