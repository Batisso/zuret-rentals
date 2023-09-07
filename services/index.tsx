import request,{gql} from "graphql-request"

const MASTER_URL='https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clm7ux9o706vj01t91har6stx/master';

export const getCarsList=async()=>{
  const query=gql`
  query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }      
  `

  const result=await request(MASTER_URL,query);
  return result;
}


export const getStoreLocations=async()=>{
const query=gql`
query storeLocation {
  storesLocations {
    address
  }
}  
`
const result=await request(MASTER_URL,query);
return result;
}


export const createBooking=async(formValue:any)=>{
const mutationQuery=gql`
mutation MyMutation {
  createBooking(
    data:  {
    userName: "`+formValue.userName+`", 
    pickUpDate: "`+formValue.pickUpDate+`", 
    pickUpTime: "`+formValue.pickUpTime+`", 
    dropOffDate: "`+formValue.dropOffDate+`", 
    dropOffTime: "`+formValue.dropOffTime+`", 
    contactNumber: "`+formValue.contactNumber+`", 
    email: "`+formValue.email+`", 
    carId: {connect: 
      {id: "`+formValue.carId+`"}}}
  ) {
    id
  }
}

`

const result=await request(MASTER_URL,mutationQuery);
return result;
}