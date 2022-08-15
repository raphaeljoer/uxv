type Social = {
  name: string;
  url: string;
  icon: React.ReactElement;
};

export type Member = {
  name: string;
  position: string;
  image: string;
  imageOverlay: string;
  socials: Social[];
};
