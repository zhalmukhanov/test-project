
export type MainHeaderLink = {
  name: string;
  link: string;
}

export type MainHeaderLinks = {
  right: MainHeaderLink;
  left: MainHeaderLink;
}

export type BottomBarTab = {
  name: string;
  link: string;
  order: number;
}
