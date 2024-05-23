import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "KSH",
});

export const convertSlugToTitle = (slug: string) => {
  let words = slug.split("-");
  let titleWords = words
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return titleWords;
};

export const convertTitleToSlug = (title: string) => {
  // Convert title to lowercase and replace spaces with hyphens
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const replaceSpaces = (name: string) => {
  return name.replace(/\s+/g, "~");
};

export const retrieveOriginalName = (slug: string) => {
  if (typeof slug !== "string") {
    return ""; // or throw an error, depending on your use case
  }
  let words = slug.split("~");
  return words.join(" ");
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const formatDate = (inputDate: string) => {
  // Parse inputDate string to Date object
  const date = new Date(inputDate);

  // Array of month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get month, day, year, hours, minutes, and seconds
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date string
  const formattedDate = `${month} ${day < 10 ? "0" + day : day}, ${year} ${
    hours < 10 ? "0" + hours : hours
  }:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  return formattedDate;
};
