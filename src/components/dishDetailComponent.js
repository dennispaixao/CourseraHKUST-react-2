import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

    function RenderDish({dish}) {
    return(
        <div class="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
        </div>
   )
     }

    function RenderComments({comments}) {
      return(<div class="col-12 col-md-5 m-1">
      <Card>
          <CardTitle ><h3>Comments</h3></CardTitle>
          <CardBody>
              
              <CardText>{comments.map((comment) => {
                  return (
                      <li style={{listStyle:"none"}} key={comment.id}>
                          <p>{comment.comment}</p>
                          <p>-- {comment.author},
                          {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(comment.date))}
                          </p>
                          <br/>
                      </li>
                     
                  )
              })}
              </CardText>
          </CardBody>
      </Card>
  </div>)
    
      
    }

    const DishDetail = (props) => {
      if (props.dish!==undefined){
        return(
          <div class="row">
              <RenderDish dish={props.dish}/>
              <RenderComments comments={props.dish.comments}/>
          </div>   
      )}else{
          return <div/>
      }
    }

export default DishDetail;