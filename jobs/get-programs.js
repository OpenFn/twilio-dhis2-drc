console.log('Get all the program ids' + 'TSyzvBiovKh');
get('programs', { orgUnit: 'TSyzvBiovKh', fields: '*' });

// Manipulate the data from dhis2...
fn(state => {
  console.log('Get all the program ids' + state.data.programs);
 
  const rapidProPrograms = state.data.programs
    .filter(prog => findAttributeValue(prog, 'program'))
    .map(prog => {
      console.log(prog);
      const programName = findAttributeValue(prog, 'program');
      console.log('programName' + programName);
      const programEntity = {
        name: `${programName}`,
      };
      return { programEntity };
    });
  return { ...state, rapidProPrograms, uuids: [] };
});
