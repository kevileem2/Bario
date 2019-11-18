import React from "react";
import { Button, Container, Icon } from "./component";
import { Colors } from "../../theme";

interface Props {
  isActive: boolean;
  onPress: () => void;
}

export default ({ onPress, isActive }: Props) => {
  return (
    <Container>
      <Button onPress={onPress} underlayColor={Colors.red}>
        <Icon size={48} name={isActive ? "close" : "plus"} />
      </Button>
    </Container>
  );
};
