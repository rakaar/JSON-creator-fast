# My personal tool to create JSONs faster to test REST APIs

Watch [this](https://drive.google.com/file/d/1e_3S6KDgrgFNDA87rKBhAMzQv4ONErlE/view) video 
OR
READ THIS ⤵️
Here the idea is to provide type of value you want with key names to generate JSON
For example you want a JSON of this kind
`{ "name" : "kau", "age": 3 }`

The above mentioned example requries a string field and a number field. To genertate that you would type
```
str name
num age
```
The above would result in 
```
{
 "name": "string",
 "age": 7

}
```
So these are the types and their respective default values

| Type          | Default       |
| ------------- | ------------- |
| str           | "string"      |
| bool          | 1             |
| num           | 7             |

Suppose you want to include an object of something this sort in your JSON
```
{ "details" : { "name": "kau", "age" : 4 } }
```
Syntax would be
```
obj details str name num age
```
The output is 
```
{
"details": {
    "name": "string",
    "age": 7

}

}
```
Suppose you want an array will a 2 strings and 3 numbers inside
The syntax would be
```
arr testarr str str num num num
```
The output would be 
```
{
"testarr": [
    "string",
    "string",
    700,
    700,
    700

]

}
```
Suppose you want a nested object
By that I meant, you want include an *object inside an object* or an *object inside an array*

Define your own type using `myobj` and use it inside an object
For example
```
myobj me str name num age
```
the above syntax would create a object and would be stored in localstorage as
```
"me" : { "name": "string", "age": 7 }
```
To use it inside an object
```
obj kau str address myobj me
```
would result in 
```
{
"kau": {
    "address": "string",
    "me": {
    "name": "string",
    "age": 7

}

}

}
```
Similarly you can include in array in this way
```
arr testarr me me 
```
would result in
```
{
	"testarr": [{
			"name": "string",
			"age": 7

		},
		{
			"name": "string",
			"age": 7

		}

	]

}
```

 ### I came across these questions in mind
### 1. This is complicated, why would anyone use it? Why not have a UI tool instead?

I built it for my personal purpose and I am not good at UI/UX things.

### 2. Why always fill a default value like always "string" ?

The idea behind building this was to save time in making JSONs. Why waste time in filling values

### 3. Why a website in React?

It is easy to build in React. And if its on web, its easy to access it rather than a CLI tool.

### 4. The JSONs are horrible to look. Why not prettify them?

Didn't find any API that does that. Will try to do soon. But does it matter 🤔


