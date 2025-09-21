import vi from './vi.json';
import en from './en.json';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  vi,
  en,
};

export default translations;