const columns = [
	{
		name: 'First Name',
		selector: row => row.firstName,
    sortable: true,
	},
	{
		name: 'Last Name',
		selector: row => row.lastName,
    sortable: true,
	},
	{
		name: 'Start Date',
		selector: row => row.startDate,
    sortable: true,
	},
  {
		name: 'Departement',
		selector: row => row.departement,
    sortable: true,
	},
  {
		name: 'Date of Birth',
		selector: row => row.dateOfBirth,
    sortable: true,
	},
  {
		name: 'Street',
		selector: row => row.street,
    sortable: true,
	},
  {
		name: 'City',
		selector: row => row.city,
    sortable: true,
	},
  {
		name: 'State',
		selector: row => row.state,
    sortable: true,
	},
  {
		name: 'Zip Code',
		selector: row => row.zipCode,
    sortable: true,
	}
];

const employees_mockup = [
  {
    id: 1,
    firstName: 'Dang',
    lastName: 'Linh',
    startDate: '28/04/2024',
    departement: "Sales",
    dateOfBirth: "28/04/1987",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip code"
  },
  {
    id: 2,
    firstName: 'Bui',
    lastName: 'Kien',
    startDate: '28/02/2022',
    departement: "Department",
    dateOfBirth: "10/10/1987",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip code"
  },
  {
    id: 3,
    firstName: 'Bui',
    lastName: 'Liam',
    startDate: '05/03/2023',
    departement: "Department",
    dateOfBirth: "10/04/2022",
    street: "Street",
    city: "City",
    state: "State",
    zipCode: "Zip code"
  }
]


export {columns, employees_mockup}