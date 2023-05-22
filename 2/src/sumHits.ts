type Tag = "javascript" | "typescript" | "go" | "rust" | "elixir" | "ruby";

type Page = {
  name: string;
  tags: Tag[];
  hits: number;
  children: Page[];
};

const sitemap: Page[] = [
  {
    name: "Javascript 101",
    tags: ["javascript"],
    hits: 150,
    children: [
      {
        name: "Creating objects",
        tags: ["javascript"],
        hits: 50,
        children: [
          {
            name: "Object Prototypes",
            tags: ["javascript"],
            hits: 20,
            children: [],
          },
        ],
      },
      {
        name: "TypeScript Basics",
        tags: ["typescript"],
        hits: 100,
        children: [
          {
            name: "Interfaces",
            tags: ["typescript"],
            hits: 30,
            children: [],
          },
          {
            name: "Generics",
            tags: ["typescript"],
            hits: 20,
            children: [
              {
                name: "Advanced Generics",
                tags: ["typescript"],
                hits: 10,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "ES6",
    tags: ["javascript", "typescript"],
    hits: 150,
    children: [],
  },
  {
    name: "Go Crash Course",
    tags: ["go"],
    hits: 80,
    children: [
      {
        name: "Concurrency",
        tags: ["go"],
        hits: 40,
        children: [],
      },
      {
        name: "Error Handling",
        tags: ["go"],
        hits: 30,
        children: [
          {
            name: "Panic and Recover",
            tags: ["go"],
            hits: 15,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "Rust Fundamentals",
    tags: ["rust"],
    hits: 70,
    children: [
      {
        name: "Ownership",
        tags: ["rust"],
        hits: 25,
        children: [
          {
            name: "Borrowing and Lifetimes",
            tags: ["rust"],
            hits: 10,
            children: [],
          },
        ],
      },
      {
        name: "Pattern Matching",
        tags: ["rust"],
        hits: 20,
        children: [],
      },
    ],
  },
  {
    name: "Elixir Introduction",
    tags: ["elixir"],
    hits: 60,
    children: [
      {
        name: "Pattern Matching",
        tags: ["elixir"],
        hits: 35,
        children: [
          {
            name: "Guard Clauses",
            tags: ["elixir"],
            hits: 15,
            children: [],
          },
        ],
      },
      {
        name: "Concurrency",
        tags: ["elixir"],
        hits: 25,
        children: [],
      },
    ],
  },
  {
    name: "Ruby Essentials",
    tags: ["ruby"],
    hits: 55,
    children: [
      {
        name: "Classes and Objects",
        tags: ["ruby"],
        hits: 30,
        children: [],
      },
      {
        name: "Modules and Mixins",
        tags: ["ruby"],
        hits: 25,
        children: [
          {
            name: "Namespacing",
            tags: ["ruby"],
            hits: 10,
            children: [],
          },
        ],
      },
    ],
  },
];

export function sumHits(tag: Tag): number {
  // TODO
  return 0;
}