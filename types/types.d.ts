declare type Creator = {
  email: string;
  username: string;
  image: string;
  _id: import('mongoose').Schema.Types.ObjectId;
};

declare type Prompt = {
  creator: Creator;
  prompt: string;
  tag: string;
  _id: import('mongoose').Schema.Types.ObjectId;
};

declare "uuid"