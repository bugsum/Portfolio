import type { Education } from "@/types/content";

export const education = [
  {
    id: "msc",
    institution: "Ashcroft University",
    credential: "M.Sc.",
    field: "Distributed Systems",
    start: "2015-08",
    end: "2017-05",
    location: "Pune, India",
    notes: [
      "Thesis on failure detection in partially synchronous networks.",
      "Teaching assistant for the undergraduate operating systems course.",
    ],
  },
  {
    id: "bsc",
    institution: "Ashcroft University",
    credential: "B.Sc.",
    field: "Computer Science",
    start: "2012-08",
    end: "2015-05",
    location: "Pune, India",
    notes: ["Graduated with distinction.", "Ran the campus Linux user group."],
  },
] satisfies readonly Education[];
