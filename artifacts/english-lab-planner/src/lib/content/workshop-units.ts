import type { GradeId, WorkshopId, WorkshopUnit } from "@/lib/data";

export const WORKSHOP_UNITS: Record<WorkshopId, Record<GradeId, WorkshopUnit[]>> = {
  reader: {
    K: [
      { id: "We Are Readers", title: "We Are Readers" },
      { id: "Sharing Reading", title: "Sharing Reading" },
      { id: "Super Powers: Reading with Phonics and Sight Word Power", title: "Super Powers: Reading with Phonics and Sight Word Power" },
      { id: "Boosting Reading Power", title: "Boosting Reading Power" },
      { id: "Becoming Avid Readers", title: "Becoming Avid Readers" },
    ],
    "1": [
      { id: "Building Good Reading Habits", title: "Building Good Reading Habits" },
      { id: "Word Detectives", title: "Word Detectives" },
      { id: "Learning about the World", title: "Learning about the World" },
      { id: "Readers Have Big Jobs to Do", title: "Readers Have Big Jobs to Do" },
      { id: "Becoming Avid Readers", title: "Becoming Avid Readers" },
    ],
    "2": [
      { id: "Becoming a Big Kid Reader", title: "Becoming a Big Kid Reader" },
      { id: "Becoming Experts", title: "Becoming Experts" },
      { id: "Tackling Longer Words and Longer Books", title: "Tackling Longer Words and Longer Books" },
      { id: "Stepping into the World of the Story", title: "Stepping into the World of the Story" },
      { id: "Growing Knowledge Together", title: "Growing Knowledge Together" },
    ],
    "3": [
      { id: "Reading Series Fiction", title: "Reading Series Fiction" },
      { id: "Reading Nonfiction Text Sets: Plants and Their Adaptations", title: "Reading Nonfiction Text Sets: Plants and Their Adaptations" },
      { id: "The Elements of Story", title: "The Elements of Story" },
      { id: "Animal Research Groups", title: "Animal Research Groups" },
      { id: "Mystery Reading", title: "Mystery Reading" },
    ],
    "4": [
      { id: "Close Reading of Fiction: Character and Theme", title: "Close Reading of Fiction: Character and Theme" },
      { id: "Digging into Nonfiction: Rocks and Volcanoes", title: "Digging into Nonfiction: Rocks and Volcanoes" },
      { id: "Drama-Ready Reading: Bringing Characters to Life", title: "Drama-Ready Reading: Bringing Characters to Life" },
      { id: "Deep Reading of Biography", title: "Deep Reading of Biography" },
      { id: "Historical Fiction", title: "Historical Fiction" },
    ],
    "5": [
      { id: "Reading Interpretively with Partners and Clubs", title: "Reading Interpretively with Partners and Clubs" },
      { id: "Researching the Universe", title: "Researching the Universe" },
      { id: "Reading About Debatable Topics", title: "Reading About Debatable Topics" },
      { id: "Fantasy Book Clubs", title: "Fantasy Book Clubs" },
      { id: "Media Literacy Skills", title: "Media Literacy Skills" },
    ],
  },
  writer: {
    K: [
      { id: "Launching the Writing Workshop", title: "Launching the Writing Workshop" },
      { id: "Show and Tell Writing", title: "Show and Tell Writing" },
      { id: "Writing for Readers: Writing Readable True Stories", title: "Writing for Readers: Writing Readable True Stories" },
      { id: "Persuasive Writing of All Kinds: Using Words to Make a Change", title: "Persuasive Writing of All Kinds: Using Words to Make a Change" },
    ],
    "1": [
      { id: "Small Moments", title: "Small Moments" },
      { id: "Topic Books", title: "Topic Books" },
      { id: "Writing Reviews", title: "Writing Reviews" },
      { id: "From Scenes to Series: Writing Fiction", title: "From Scenes to Series: Writing Fiction" },
    ],
    "2": [
      { id: "Making Small Moments Big", title: "Making Small Moments Big" },
      { id: "Chapter Books: Writing Nonfiction from the Heart", title: "Chapter Books: Writing Nonfiction from the Heart" },
      { id: "Finding Awesome Everywhere: Celebrating through Opinion Writing", title: "Finding Awesome Everywhere: Celebrating through Opinion Writing" },
      { id: "Writing Research-Based Nonfiction", title: "Writing Research-Based Nonfiction" },
    ],
    "3": [
      { id: "The Art of Information Writing", title: "The Art of Information Writing" },
      { id: "Changing the World", title: "Changing the World" },
      { id: "Structuring Episodes: Writing Series Fiction", title: "Structuring Episodes: Writing Series Fiction" },
      { id: "An Introduction to Literary Essays", title: "An Introduction to Literary Essays" },
    ],
    "4": [
      { id: "Spinning True Stories into Gold", title: "Spinning True Stories into Gold" },
      { id: "Boxes and Bullets: Writing Essays and Arguments", title: "Boxes and Bullets: Writing Essays and Arguments" },
      { id: "Literary Essay: Writing About Fiction", title: "Literary Essay: Writing About Fiction" },
      { id: "Discipline-Based Writing", title: "Discipline-Based Writing" },
    ],
    "5": [
      { id: "Turning Life into Literature", title: "Turning Life into Literature" },
      { id: "Literary Essay: Opening Texts and Seeing More", title: "Literary Essay: Opening Texts and Seeing More" },
      { id: "Research-Based Argument", title: "Research-Based Argument" },
      { id: "Graphic Novels", title: "Graphic Novels" },
      { id: "Journalism: Researching and Writing Articles", title: "Journalism: Researching and Writing Articles" },
    ],
  },
};
