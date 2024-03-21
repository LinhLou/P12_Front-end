
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';


describe('navigation between pages',()=>{
  test('it should render the correct page when navigating', async()=>{
    render(<App />);
    expect(screen.getByText(/View Current Employees/)).toBeInTheDocument();
  
    await userEvent.click(screen.getByText(/View Current Employees/));
    await expect(screen.queryByTestId('homePage')).not.toBeInTheDocument();
    await expect(screen.getByTestId('employeesListPage')).toBeInTheDocument();
  
    await userEvent.click(screen.getByRole('link'));
    await expect(screen.queryByTestId('employeesListPage')).not.toBeInTheDocument();
    await expect(screen.queryByTestId('homePage')).toBeInTheDocument();
  
  })
});

describe('home page',()=>{
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('it should render all component of the home page',()=>{
    render(<App />);
    const titleEle = screen.getByTestId('homePage');
    const formEle = screen.getByTestId('form');
    const birdthDayEle = screen.getByTestId('date-of-birth');
    const startDateEle = screen.getByTestId('start-date');
    const saveFormEle = screen.getByRole('saveForm');
  
    expect(titleEle.textContent).toBe('HRnet');
    expect(formEle).toBeInTheDocument();
    expect(birdthDayEle).toBeInTheDocument();
    expect(startDateEle).toBeInTheDocument();
    expect(saveFormEle).toBeInTheDocument();
  })

  test('the data time picker component ',async ()=>{
    render(<App />);
    const birdthDayEle = screen.getByTestId('date-of-birth');
    const startDateEle = screen.getByTestId('start-date');
  
    expect(birdthDayEle).toBeInTheDocument();
    expect(startDateEle).toBeInTheDocument();
  
    await userEvent.click(birdthDayEle);
    const inputBirthDayEle = within(birdthDayEle).getByRole('textbox');
    expect(inputBirthDayEle).toHaveFocus();
    expect(screen.getByText('Previous Month')).toBeInTheDocument();
    expect(screen.getByText('Next Month')).toBeInTheDocument();

    await fireEvent.change(inputBirthDayEle,{target: {value: '04/28/1987'}});
    expect(inputBirthDayEle).toHaveValue('04/28/1987');

    await userEvent.click(startDateEle);
    const inputStartDateEle = within(startDateEle).getByRole('textbox');
    expect(inputStartDateEle).toHaveFocus();
    expect(screen.getAllByText('Previous Month')).toHaveLength(2);
    expect(screen.getAllByText('Next Month')).toHaveLength(2);

    await fireEvent.change(inputStartDateEle,{target: {value: '04/28/1987'}});
    expect(inputStartDateEle).toHaveValue('04/28/1987');
  })

  test('the select menu should run correctly ',async ()=>{
    render(<App />);
    const stateEle = screen.getByTestId('select-menu-state');
    const departementEle = screen.getByTestId('select-menu-departement');
  
    expect(stateEle).toBeInTheDocument();
    expect(departementEle).toBeInTheDocument();

  })
})



