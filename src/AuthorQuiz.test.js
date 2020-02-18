import React from 'react';
import { render } from '@testing-library/react';
import App from './AuthorQuiz';
import AuthorQuiz from './AuthorQuiz';
import ReactDOM from 'react-dom';


describe("Author Quiz", () => {
  it("renders without crashing", () =>{
    const div = document.createElement("div");


ReactDOM.render(<AuthorQuiz />, div);
});
});


// test('renders learn react link', () => {
//   const { getByText } = render(<AuthorQuiz />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
