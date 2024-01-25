import { Button, Input, InputProps, VStack } from "@chakra-ui/react";
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
export default function Spam() {
  const [url, setUrl] = useState("");
  const [number, setNumber] = useState(0);

  const handleUrlChange: InputProps["onChange"] = (e) => {
    setUrl(e.target.value as string);
  };

  const handleNumberChange: InputProps["onChange"] = (e) => {
    setNumber(Number(e.target.value));
  };

  const handleSuccess = () => {
    setNumber((prev) => prev - 1);
  };

  const handleError = () => {};
  const handleSubmit = async () => {
    for (let i = 0; i < number; i++) {
      await fetcher({
        url,
        onSuccess: handleSuccess,
        onError: handleError,
      });
    }
    setUrl("");
  };

  return (
    <VStack>
      <Input
        placeholder="URL bai viet"
        value={url}
        onChange={handleUrlChange}
      />
      <Input
        type="number"
        placeholder="Number"
        value={number}
        onChange={handleNumberChange}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </VStack>
  );
}
