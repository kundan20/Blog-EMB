import React from 'react'
import axios from 'axios'
import * as constants from '../shared/Constants'

export class CommonService {
    
    async getAllBlogs() {
        try{
            let response = await axios({
                url: constants.BASE_URL + constants.GET_ALL_BLOGS_URL,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                crossdomain: true
            })
            return response.data;
        } catch(err) {
            console.log(err)
        }      
    }
}