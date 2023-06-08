import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
    return (
          <VStack
              backgroundColor="#FFFFFF"
              color="#000000"
              borderRadius={8}
          >
              <Image src={imageSrc} alt={title} borderRadius={8} />
              <VStack padding={4}
                      marginTop={0}
                      align="start">
                  <Heading size="sm">{title}</Heading>
                  <Text>{description}</Text>
                  <HStack>
                      <Text>See More</Text>
                      <FontAwesomeIcon icon={faArrowRight} size="1x" />
                  </HStack>
              </VStack>
          </VStack>
    );
};

export default Card;
