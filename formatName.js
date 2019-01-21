const user = {
  firstName: 'Chris',
  lastName:'DeAngelis'
}

function formatName() {
  return user.firstName + " " + user.lastName;
}

ReactDOM.render(
  <h3>Hello {formatName()}</h3>,
  document.getElementById('root')
);