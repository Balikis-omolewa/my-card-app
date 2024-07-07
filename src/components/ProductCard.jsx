import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({id, title, imgUrl, description, price}) {
  return (
    <Card className='h-100'>
      <Card.Img src={imgUrl} className='card-img-top' alt={title} />
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button className='btn btn-warning'>Add To Cart</Button>
      </Card.Body>
    </Card>
   
  );
};

export default ProductCard;