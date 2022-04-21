import { useToast } from "native-base";

const useAlert = () => {
  const { show } = useToast();

  const onShowMessage = (message: string) => {
    show({
      title: message,
      placement: "bottom",
    });
  };

  return {
    onShowMessage,
  };
};

export default useAlert;
