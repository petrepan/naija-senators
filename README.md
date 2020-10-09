# naija-senators

A library showing the list of nigerian senators with their contact infos

### Installation

```Javascript

npm install naija-senators

```

### Example

```Javascript
// ES6
import {all, findbystate, findbyname} from 'naija-senators';

console.log(all()); //return all the list of senators(state, name, email, phone)
console.log(findbystate("ekiti")) //returns all the list of senators in ekiti(state, name, email, phone)
console.log(findbyname("az")) //returns all the list of senators that matches the string "az"(state, name, email, phone)

```

Note: ES5 syntax and below is not supported. Add `type: module` to your package.json file


### Structure

<!-- ![screenshot](https://pasteboard.co/JuShMfn.png) -->

```Javascript
[{
state: string;
name: string;
email: string;
phone: string;
}]
```

| function            | argument | response                                                                                   |     |     |
| ------------------- | -------- | ------------------------------------------------------------------------------------------ | --- | --- |
| .all()              | none     | it returns an array of all senators(name,emails and phone number)                          |     |     |
| .findbystate(state) | state    | it returns the list of senators in the given argument                                      |     |     |
| .findbyname(name)   | name     | it returns the list of senators in the argument(list of senators that equals the argument) |     |     |

### Features

list all nigerian senators with their contact infos

## Contributing

- Fork this repositry to your account.
- Clone the repositry
- Commit your changes
- Push to the remote branch: git push origin master
- Open a pull request.
