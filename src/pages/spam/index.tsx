import { Button, Input, InputProps, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Fetcher {
  url: string;
  onSuccess: () => void;
  onError: () => void;
}

const fetcher = async ({ url, onSuccess, onError }: Fetcher) => {
  return await fetch(url).then((res) => {
    if (res.ok) {
      return onSuccess();
    } else {
      onError();
      throw new Error("Something went wrong");
    }
  });
};
const DEFAULT_DELAY = 5;
export default function Spam() {
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState(0);
  const [delay, setDelay] = useState(DEFAULT_DELAY);

  const handleUrlChange: InputProps["onChange"] = (e) => {
    setUrl(e.target.value as string);
  };

  const handleNumberChange: InputProps["onChange"] = (e) => {
    setNumber(Number(e.target.value));
  };
  const handleDelayChange: InputProps["onChange"] = (e) => {
    setDelay(Number(e.target.value));
  };

  const handleSuccess = () => {
    setNumber((prev) => prev - 1);
  };

  const handleError = () => {};
  const handleSubmit = () => {
    for (let i = 0; i < number; i++) {
      setTimeout(() => {
        fetcher({
          url,
          onSuccess: handleSuccess,
          onError: handleError,
        });
      }, delay * 1000); // Delay in milliseconds (1000ms = 1 second)
    }
    setUrl("");
    setDelay(DEFAULT_DELAY);
  };
  return (
    <div>
      <VStack>
        <Text>Url</Text>

        <Input
          placeholder="URL bai viet"
          value={url}
          onChange={handleUrlChange}
        />
        <Text>So luong bai viet</Text>
        <Input
          type="number"
          placeholder="Number"
          value={number}
          onChange={handleNumberChange}
        />
        <Text>Delay</Text>

        <Input
          type="number"
          placeholder="Delay"
          value={number}
          onChange={handleDelayChange}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </div>
  );
}
