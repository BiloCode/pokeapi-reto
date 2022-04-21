import { useCallback, useState } from "react";

export type BooleanEvents = {
  on(): void;
  off(): void;
  toggle(): void;
  change(value: boolean): void;
};

type BooleanReturnType = [boolean, BooleanEvents];

const useBoolean = (defaultValue?: boolean): BooleanReturnType => {
  const [value, setValue] = useState<boolean>(defaultValue || false);

  const on = useCallback(() => setValue(() => true), []);
  const off = useCallback(() => setValue(() => false), []);
  const toggle = useCallback(() => setValue((value) => !value), []);

  const change = useCallback((value: boolean) => setValue(value), []);

  return [value, { on, off, toggle, change }];
};

export default useBoolean;
