import React, { useState, useEffect } from 'react'
import { CommonService } from '../shared/CommonService'
import * as constants from '../shared/Constants'
import Modal from 'react-awesome-modal'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Blog from './Blog'
import { Container } from 'react-bootstrap'

const cs = new CommonService()

const AllBlogs = () => {
    const [ isLoading, setIsLoading ] = useState(false)
    const [ blogData, setBlogData ] = useState([])

    useEffect(() => {
        setIsLoading(true)
        cs.getAllBlogs().then((res) => {
            console.log(res)
            if(res && res.length !== 0) {
                setIsLoading(false)
                setBlogData(res)
            }
        }).catch((err) => {
            console.log('Something went wrong ', err)
            setIsLoading(false)
        })
    }, [])


    return (
        <>
            <Container className="py-3">
                <Modal visible={isLoading} width="0" height="0" effect="fadeInUp" >
                    <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
                </Modal>
                {
                    blogData.length !== 0 && blogData.map((item, ind) => {
                        return <Blog item = {item} key = {ind} />
                    })
                }
            </Container>            
        </>
    )
}

export default AllBlogs
