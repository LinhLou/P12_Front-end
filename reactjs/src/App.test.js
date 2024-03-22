import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';


test('renders correct page when navigating', async()=>{
  render(<App />);
  expect(screen.getByText(/View Current Employees/)).toBeInTheDocument();

  await userEvent.click(screen.getByText(/View Current Employees/));
  await expect(screen.queryByTestId('homePage')).not.toBeInTheDocument();
  await expect(screen.getByTestId('employeesListPage')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('link'));
  await expect(screen.queryByTestId('employeesListPage')).not.toBeInTheDocument();
  await expect(screen.queryByTestId('homePage')).toBeInTheDocument();

})


describe('Given user is on the home page',()=>{
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('render the home page',()=>{
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

  test('the data time picker component should run correctly',async ()=>{
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
    expect(within(stateEle).queryByRole('list')).not.toBeInTheDocument();
    
    const headerStateMenu = within(stateEle).getByRole('textbox');
    await userEvent.click(headerStateMenu);
    expect(within(stateEle).getByRole('list')).toBeInTheDocument();
    
    const stateOptions = within(stateEle).getAllByRole('option');
    expect(stateOptions[0].textContent).toBe('Alabama ')
    
    await userEvent.click(stateOptions[0]);
    expect(within(stateEle).queryByRole('list')).not.toBeInTheDocument();
    expect(within(stateEle).getByText('Alabama')).toBeInTheDocument();
    
    const headerDepartementMenu = within(departementEle).getByRole('textbox');
    await userEvent.click(headerDepartementMenu);
    expect(within(departementEle).getByRole('list')).toBeInTheDocument();
    
    const departementOptions = within(departementEle).getAllByRole('option');
    expect(departementOptions[0].textContent).toBe('Sales ')
    
    await userEvent.click(departementOptions[0]);
    expect(within(departementEle).queryByRole('list')).not.toBeInTheDocument();
    expect(within(departementEle).getByText('Sales')).toBeInTheDocument();
  })

  test('the modal should be rendered when the save button is clicked and removed when close button is clicked',async ()=>{
    render(<App />);
    const saveBtn = screen.getByRole('saveForm');
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    await userEvent.click(saveBtn);
    expect(screen.getByTestId('modal')).toBeInTheDocument();

    const closeBtn = within(screen.getByTestId('modal')).getByText('Close');
    await userEvent.click(closeBtn);
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  })

})

describe('Given user is on the employee-list page',()=>{
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('render the employee-list page', async()=>{

    render(<App />);
    await userEvent.click(screen.getByText(/View Current Employees/));

    const divEle = screen.getByTestId('employeesListPage');
    expect(divEle).toBeInTheDocument();
    expect(within(divEle).getByRole('table')).toBeInTheDocument();
  })

})



