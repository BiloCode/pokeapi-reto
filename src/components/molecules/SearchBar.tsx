import { FC } from "react";
import { Box, Input } from "native-base";
import { Pressable } from "react-native";

import SearchIcon from "@/components/atoms/Icon/SearchIcon";

type Props = {
  disabled?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  onChangeText?(text: string): void;
};

const SearchBar: FC<Props> = ({
  disabled,
  autoFocus,
  placeholder,
  onChangeText,
}) => {
  return (
    <Input
      fontSize="md"
      isDisabled={disabled}
      autoFocus={autoFocus}
      placeholder={placeholder}
      onChangeText={onChangeText}
      _focus={{
        borderColor: "blueGray.400",
        backgroundColor: "white",
      }}
      InputLeftElement={
        <Box m="2" ml="3">
          <SearchIcon color="gray.400" />
        </Box>
      }
    />
  );
};

SearchBar.defaultProps = {
  placeholder: "Search...",
};

export default SearchBar;
