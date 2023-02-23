import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import products from "./products.json";
import "./styles/hola.css";


const Item = ({ item }) => {
  return (
     <div className="cuerpo-card">
     <Card
       clasName="holis"
       maxW="sm"
       w="20%"
       m="30px"
       shadow="dark-lg"
     >
       <CardBody pb="10px" minH="0">
         <Image
           src={products[0].pictureUrl}
           alt="Green double couch with wooden legs"
           borderRadius="lg"
         />
         <Stack mt="6" spacing="3">
           <Heading size="md">{products[0].title}</Heading>
           <Text>{products[0].description}</Text>
           <Text color="blue.600" fontSize="2xl">
             ${products[0].price}
           </Text>
         </Stack>
       </CardBody>
       <Divider />
       <CardFooter>
         <ButtonGroup spacing="2">
           <Button variant="solid" colorScheme="blue">
             Detalles
           </Button>
           <Button variant="ghost" colorScheme="blue">
             Agregar al Carrito
           </Button>
         </ButtonGroup>
       </CardFooter>
     </Card>
   </div>
  );
};

export default Item;

  // <div className="counter">
      {/* <div className="imagenProducto">
        <img src={item.pictureUrl} alt={item.title} />
      </div>
      <div className="infoProducto">
        <div className="titleProd">
          <h3>{item.title}</h3>
        </div>
        <div className="moreInfo">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="pruebadiv">
        <Menu>
          <Link to={`/detalle/${item.id}`}>
            <button className="buttonDetails btn-4">Details</button>
          </Link>
        </Menu>
      </div> */}
    {/* </div> */}