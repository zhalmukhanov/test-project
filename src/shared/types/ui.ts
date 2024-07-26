
export type MainHeaderLink = {
  name: string;
  link: string;
}

export type MainHeaderLinks = {
  right?: MainHeaderLink;
  left?: MainHeaderLink;
}

export type MainHeaderProps = {
  links?: MainHeaderLinks;
  title: string;
  light?: boolean;
  display?: boolean;
}

export type BottomBarTab = {
  name: string;
  link: string;
  order: number;
}

export type SegmentControlTab = {
  name: string;
  value: string;
}

export type ButtonType = 'primary' | 'secondary';

export type Content = {
  title: string;
  text: string;
  time: string;
}
