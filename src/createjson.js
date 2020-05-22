function str(line) {
  let row = ``;
  const vars = line.split(" ").slice(1);

  vars.forEach((item) => {
    if (item !== undefined && item !== "") row += `"${item}": "string",\n`;
  });
  return row;
}

function num(line) {
  let row = ``;
  const vars = line.split(" ").slice(1);

  vars.forEach((item) => {
    if (item !== undefined && item !== "") row += `"${item}": 7,\n`;
  });
  return row;
}

function bool(line) {
  let row = ``;
  const vars = line.split(" ").slice(1);

  vars.forEach((item) => {
    if (item !== undefined && item !== "") row += `"${item}": 1,\n`;
  });
  return row;
}

function addNestedObj(customObjName) {
  console.log("name is ", customObjName);
  return localStorage.getItem(customObjName);
}

function obj(line) {
  let row = ``;
  const words = line.split(" ");
  row += `"${words[1]}": {\n`;
  const vars = words.slice(2);
  for (let i = 0; i < vars.length; i++) {
    if (i % 2 === 0) {
      if (vars[i] === "str") row += `    ` + str(`str ${vars[i + 1]}`);

      if (vars[i] === "num") row += `    ` + num(`num ${vars[i + 1]}`);

      if (vars[i] === "bool") row += `    ` + bool(`bool ${vars[i + 1]}`);

      if (vars[i] === "myobj") row += `    ` + addNestedObj(vars[i + 1]);
    }
  }
  row = row.replace(/,([^,]*)$/, "$1");
  row += `\n},\n`;
  return row;
}

function myobj(line) {
  const customObj = obj(line);
  const customObjName = line.split(" ")[1];
  localStorage.setItem(customObjName, customObj);
}

function arr(line) {
  let row = ``;
  const words = line.split(" ");
  row += `"${words[1]}": [\n`;
  const vars = words.slice(2);

  for (let i = 0; i < vars.length; i++) {
    if (vars[i] !== undefined && vars[i] !== "") {
      
      if (vars[i] === "str") row += `    ` + `"string",\n`;

      if (vars[i] === "num") row += `    ` + `700,\n`;

      if (vars[i] === "bool") row += `    ` + "1,\n";
      
      else {
        console.log("what is ths ", localStorage.getItem(vars[i]))
        if (localStorage.getItem(vars[i]) !== undefined)
          if (addNestedObj(vars[i]) !== null) {
            const nestedObj = addNestedObj(vars[i]);
            const indexOfOpeningBrace = nestedObj.indexOf("{");
            const objInArr = addNestedObj(vars[i]).slice(indexOfOpeningBrace);
            console.log("objest in arr ", objInArr);
            row += `    ` + objInArr;
          }
      }
    }
  }

  row = row.replace(/,([^,]*)$/, "$1");
  row += `\n],\n`;
  return row;
}

function create(lines) {
  let json = `{\n`;
  // take array and return json
  lines.forEach((line) => {
    const type = line.split(" ")[0];
    if (type === "str") json += str(line);

    if (type === "num") json += num(line);

    if (type === "bool") json += bool(line);

    if (type === "obj") json += obj(line);

    if (type === "myobj") myobj(line);

    if (type === "arr") json += arr(line);
  });
  json += `\n}`;
  return json;
}

export function parse(content) {
  const lines = content.split("\n");
  let json = create(lines);
  json = json.replace(/,([^,]*)$/, "$1"); // remove the last comma
  return json;
}
