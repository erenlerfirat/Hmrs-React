import axios from 'axios';
export default class ProductService
{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall").then().catch()
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }
}