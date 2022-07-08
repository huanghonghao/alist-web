import { useI18n } from "@solid-primitives/i18n";

const useT = () => {
  const [t] = useI18n();
  return (
    key: string,
    params?: Record<string, string> | undefined,
    defaultValue?: string | undefined
  ) => {
    const value = t(key, params, defaultValue);
    if (!value) {
      return key;
    }
    return value;
  };
};

export { useT };
