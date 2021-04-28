import { render, fireEvent } from '@testing-library/react';
import App from './App';

test("Header renders with correct text", () => {
  const { getByTestId } = render(<App/>);
  const headerEl        = getByTestId("header");
  expect(headerEl.textContent).toBe("Click Counter App");
})

test("Counter initially start with text of 0", () => {
  const { getByTestId } = render(<App/>);
  const counterEl       = getByTestId("counter");
  expect(counterEl.textContent).toBe("0")
})

test("Add button renders with +", () => {
  const { getByTestId } = render(<App/>);
  const addBtn          = getByTestId("add-btn");
  expect(addBtn.textContent).toBe("+");
})

test("Subtract button renders with -", () => {
  const { getByTestId } = render(<App/>);
  const subtractBtn     = getByTestId("subtract-btn");
  expect(subtractBtn.textContent).toBe("-");
})

test("Click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<App/>);
  const addBtnEl        = getByTestId("add-btn");
  const counterEl       = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
})

test("Click on minus btn subtracts 1 to counter", () => {
  const { getByTestId } = render(<App/>);
  const subtractBtnEl   = getByTestId("subtract-btn");
  const counterEl       = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-1");
})

test("Adding and then Subtracting leads to the correct counter number", () => {
  const { getByTestId } = render(<App/>);
  const addBtnEl        = getByTestId("add-btn");
  const subtractBtnEl   = getByTestId("subtract-btn");
  const counterEl       = getByTestId("counter");
  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("3");

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("1");
})

test("Counter contains correct className", () => {
  const { getByTestId } = render(<App/>);
  const addBtnEl        = getByTestId("add-btn");
  const subtractBtnEl   = getByTestId("subtract-btn");
  const counterEl       = getByTestId("counter");
  expect(counterEl.className).toBe("");
  
  fireEvent.click(addBtnEl);
  expect(counterEl.className).toBe("positive");

  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtnEl);
  expect(counterEl.className).toBe("negative");
})
