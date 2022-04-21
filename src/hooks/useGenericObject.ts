import { useCallback, useState } from "react";

type CustomObject = Record<string, unknown>;
type HookReturnType<T> = [T | null, Functions<T>];
type Functions<T> = {
  onClearData(): void;
  onChange(data: T | null): void;
  onChangeFromRender(data: T | null): () => void;
};

const useGenericObject = <T extends CustomObject>(): HookReturnType<T> => {
  const [data, setData] = useState<T | null>(null);

  const onClearData = useCallback((): void => setData(() => null), []);

  const onChange = useCallback((newData: T | null) => setData(() => newData), []);

  const onChangeFromRender = useCallback(
    (newData: T | null) => () => {
      setData(() => newData);
    },
    []
  );

  return [data, { onChangeFromRender, onChange, onClearData }];
};

export default useGenericObject;
