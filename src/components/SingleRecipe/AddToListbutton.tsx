import { Button, useDisclosure } from "@chakra-ui/react";
import { AddToListWindowConfirm } from "./AddToListWindowConfirm";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSingleRecipe } from "../../hooks/useSingleRecipe";

export const AddToListbutton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useContext(AuthContext);
  const { isRecipeInDishList, checkIfRecipeIsInDishList } = useSingleRecipe();
  const navigate = useNavigate();
  const handleOnClick = () => {
    if (!user) {
      navigate("/signin");
      return;
    }
    onOpen();
  };
  
  useEffect(() => {
    if (user) {
      checkIfRecipeIsInDishList();
    }
  }, [user]);

  return (
    <>
      <Button
        colorScheme="teal"
        size="xs"
        onClick={handleOnClick}
        mt={"10px"}
        isDisabled={!user || isRecipeInDishList}
      >
        {isRecipeInDishList
          ? "Ingredients are in your shop list!"
          : "Save to my shop list"}
      </Button>

      <AddToListWindowConfirm isOpen={isOpen} onClose={onClose} />
    </>
  );
};
