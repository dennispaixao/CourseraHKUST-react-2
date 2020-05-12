import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class DishDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    formatDate(date) {
        
          var dateFormated=  new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
            }).format(new Date(date))
        return dateFormated;
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div class="row">
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardTitle ><h3>Comments</h3></CardTitle>
                            <CardBody>
                                
                                <CardText>{dish.comments.map((comment) => {
                                    return (
                                        <li style={{listStyle:"none"}} key={comment.id}>
                                            <p>{comment.comment}</p>
                                            <p>-- {comment.author},
                                            {this.formatDate(comment.date)}
                                            </p>
                                            <br/>
                                        </li>
                                       
                                    )
                                })}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>


            )
        }
        else {
            return (
                <div></div>
            )
        }

    }

    render() {
        return (
            this.renderDish(this.props.dish)
        );
    }
}

export default DishDetails;