import React from 'react'
import { Row, Col } from 'react-bootstrap'
import moment from 'moment'
const Blog = (props) => {
    const { item } = props
    return (
        <Row>
            <Col>
                <div className = "blog-card mt-4 shadow">
                    <Row>
                        <Col md={10}>
                            <h4>{item.title}</h4>
                        </Col>
                        <Col className="text-right">
                            <span><em>{moment(item.timestamp).format('DD/MM/YYYY,HH:mm:ss')}</em></span>
                        </Col>
                    </Row>                   
                    <p>{item.body_text}</p>
                    <Row>
                        <Col md = {10}>
                            {item.tags && item.tags.map((tag, ind) => {
                                return (
                                    <span className = "tag-chips" key = {ind}>
                                        {tag.name}
                                    </span>
                                )
                            })}                           
                        </Col>
                        <Col md = {2}>
                            <span className="likes">Likes: {item.number_of_likes}</span>        
                            <span>Views: {item.number_of_views}</span>                         
                        </Col>
                    </Row>


                </div>
            </Col>
        </Row>
      
    )
}

export default React.memo(Blog)
