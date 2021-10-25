import React,{ Component } from "react";
import { CardText } from "reactstrap";
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);


        this.state={
            selectedDish:null,
            selectedComment:null,
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    };

    onCommentSelect(comment){
        this.setState({selectedComment:comment})
    };

    

    renderDish(dish) {
        if (dish != null){
            return (
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      <div className="col-12 col-md-5 m-1">
                          <div>{dish.comment}</div>
                      </div>
                    </CardBody>
                </Card>
                </div>
            </div>
            )
        }    
        else{

            return(
                <div></div>
            );
        }
            
    }

    renderComments(comment){
        if(comment !=null){
            return(
                <div className="list-unsyled">
                <div>
                    <h4>Comments</h4>
                    <div>{dish.comment}</div>
                    <div>{dish.author}</div>
                </div>
            </div>
            )
        }
        return(
            <div></div>
        );
            
        
    }

    

    render(){
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      <div className="col-12 col-md-5 m-1">
                          <div>{dish.comment}</div>
                      </div>
                    </CardBody>
                </Card>
                </div>
            </div>
        )
    }
}

export default DishDetail;