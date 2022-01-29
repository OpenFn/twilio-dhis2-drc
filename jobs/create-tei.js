create('trackedEntityInstances', {
  trackedEntityType: 'nEenWmSyUEp', // a person
  orgUnit: 'DiszpKrYNg8',
  attributes: [
    {
      attribute: 'w75KJ2mc4zz', // attribute id for first name
      value: dataValue('results.name.value') // data from submission 
    },
    {
      attribute: 'zDhUuAYrxNC', // attribute id for last name
      value: dataValue('results.last_name.value')// data from another submission field
    }
  ],
  enrollments: [
    {
      orgUnit: 'DiszpKrYNg8',
      program: 'IpHINAT79UW', // child program
      programState: 'oRySG82BKE6', // active
    },
  ]
});

//Jan 27

//program=IpHINAT79UW&ou=DiszpKrYNg8


