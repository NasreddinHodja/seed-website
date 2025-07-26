export type LinkedName = { label: string; link: string };
export type Name = string;
export type MaybeLinkedName = Name | LinkedName;

export type Picture = {
  originUrl: string;
  thumbUrl: string;
  link: string;
};
