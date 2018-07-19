# PasswordCost

A project to describe password strength as monetary value.

For example, given one billion hashes per second, at £5 an hour;

| Password 		           | Cost Guess (£)               |
| ------------------------ | ------------------------ |
| horsebatterystaple       | 8892.1857024000          |
| horsebatterystapleapple  | 35905578804.0069166667   |

# Usage
```
var passwordCost = new PasswordCost(1000000000, 5);
var result = passwordCost.calculate("horsebatterystapleapple", true);
console.log(result);
```

# Output
```
35905578804.0069166667
```

[GOGS](https://box.rhowell.io/gogs/ryan/PasswordCost/)

[GitHub Mirror](https://github.com/TheRyanHowell/PasswordCost)
