# naija-senators

A library showing the list of nigerian senators with their contact infos

### Installation

``` Javascript

npm install naija-senators

```

### Structure
![screenshot](https://github.com/petrepan/naija-senators/blob/main/structure.png)

### Example

``` Javascript
//ES5
const naijaSenators = require('naija-senators');

// ES6
import naijaSenators from 'naija-senators';

console.log(naijaSenators.all());
console.log(naijaSenators.findbystate("ekiti"))

```

| function    | argument                                            | response                                                          |   |   |
|-------------|-----------------------------------------------------|-------------------------------------------------------------------|---|---|
| .all()      | none                                                | it returns an array of all senators(name,emails and phone number) |   |   |
| .findbystate(state) | state(Nigeria state. Note: it's not case sensitive) | it returns the list of senators in the argument(list of senators in the state)               |   |   |

### Features

list all nigerian senators with their contact infos

## Contributing

* Fork this repositry to your account.
* Clone the repositry
* Commit your changes
* Push to the remote branch: git push origin master
* Open a pull request.
