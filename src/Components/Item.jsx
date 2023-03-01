import React, { useContext } from "react";
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
import FavoriteHeart from "./FavoriteHeart";

const Item = ({ item }) => {
  return (
    <div className="counter">
      <FavoriteHeart />
      <div className="imagenProducto">
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
      </div>
    </div>
  );
};

export default Item;

// const Item = ({ item }) => {
//   return (
//   <div className="cuerpo-card">
//    <Card
//     //  clasName="holis"
//     //  maxW="sm"
//      w="100%"
//      m="30px"
//     //  shadow="dark-lg"
//    >
//      <CardBody pb="10px" minH="0">
//        <Image className="imagenProducto"
//          src={item.pictureUrl}
//          alt="Green double couch with wooden legs"
//          borderRadius="lg"
//        />
//        <Stack mt="6" spacing="3">
//          <Heading className="titleProd" size="md">{item.title}</Heading>
//          <Text className="moreInfo">{item.description}</Text>
//          <Text color="blue.600" fontSize="2xl">
//            ${item.price}
//          </Text>
//        </Stack>
//      </CardBody>
//      <Divider />
//      <CardFooter>
//        <ButtonGroup spacing="2">
//          <Button variant="solid" colorScheme="blue">
//            Detalles
//          </Button>
//          <Button variant="ghost" colorScheme="blue">
//            Agregar al Carrito
//          </Button>
//        </ButtonGroup>
//      </CardFooter>
//    </Card>
//  </div>

// );
// };
// export default Item;
