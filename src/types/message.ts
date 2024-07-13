export type Message = {
  role: "user" | "Owner";
  content: "string";
  links?: string[];
};
