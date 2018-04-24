export interface ColourProps {
  description: string
}

export interface SProps extends ColourProps {
  hex: string
}

export interface ColourObject {
  name: string;
  hex: string;
}

export interface ColourWithNameAndValue {
  [key: string]: string
}
