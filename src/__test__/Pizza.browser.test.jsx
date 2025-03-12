import { render } from "vitest-browser-react";
import { test, expect } from "vitest";
import Pizza from "../Pizza";

test("alt test render on image", async () => {
  const name = "My Favroit pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} image={src} description={"cool browser stuff"} />,
  );

  const img = await screen.getByRole("img");

  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttribute("src", src);
  await expect.element(img).toHaveAttribute("alt", name);
});
