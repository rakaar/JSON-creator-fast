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
    }
  }
  row = row.replace(/,([^,]*)$/, "$1");
  row += `\n},\n`;
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
