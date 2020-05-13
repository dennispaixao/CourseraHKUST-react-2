import React  from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <div className="container"> 
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>    
                </div>   

                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>       
          </div>
      )}else{
          return <div/>
      }
    }

export default DishDetail;