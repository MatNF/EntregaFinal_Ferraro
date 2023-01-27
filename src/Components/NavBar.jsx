import React from "react";
import CartWidget from "./CartWidget";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Image,
  Link
} from "@chakra-ui/react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <>
      <Container maxW="100rem" bg="#24252a" color="#f2f3f7">
        <Flex alignContent="center" alignItems="center" justifyContent="center" gap="2">
        {/* Agrego Logo en la esquina izquierda   */}
          <Box p="2" color="white">
            <Heading size="md">
              <Logo />
            </Heading>
          </Box>
          <Box p="2" color="white">
            <Heading size="md">Friendster</Heading>
          </Box>

          <Spacer />
        {/* Agrego textos en el medio */}
          <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem">
            <Flex align="center" mr={5}>
              <Link as={Link} to="/" fontWeight="medium" color="white" mr={4}>
                Home
              </Link>
              <Link as={Link} to="/contact" fontWeight="medium" color="white" mr={4}>
                Categories
              </Link>
              <Link as={Link} to="/history" fontWeight="medium" color="white" mr={4}>
                About Us
              </Link>
              <Link as={Link} to="/about" fontWeight="medium" color="white" mr={4}>
                Contact Us
              </Link>
            </Flex>
          </Flex>
          <Spacer />

        {/* Agrego boton de icono de carrito CartWidget */}
          <Flex display="flex" alignItems="center" justifyContent="center">
            
            <Button rounded="14" bg="#0088a9" variant="solid" variantcolor="#0088a9" _hover={{ bg: "#99cfdd" }} size="md" height="35px" width="45px">
              <CartWidget />
            </Button>

          </Flex>

        {/* Agrego foto de perfil*/}
        <Flex display="flex" alignItems="center" justifyContent="center">
          <Image ml="8px" borderRadius='full' boxSize='35px' src='https://cdn.dribbble.com/users/2638821/screenshots/9213234/media/d51ac680af06d6c9642b145ebe24633f.jpg?compress=1&resize=1000x750&vertical=top' alt='Dan Abramov' />
        </Flex>

        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
