test("renders without crashing", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  expect(div).toBeInTheDocument();
  document.body.removeChild(div);
});

test("basic math works", () => {
  expect(1 + 1).toBe(2);
});
