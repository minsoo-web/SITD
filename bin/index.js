#!/usr/bin/env node
"use strict";

const fs = require("fs");
const yargs = require("yargs");

const options = yargs.usage("Usage: --path file path").option("p", {
  alias: "path",
  describe: "file path",
  type: "string",
  demandOption: true,
}).argv;

// 동기적 파일 읽기
let rawdata = fs.readFileSync(options.path);
let name = JSON.parse(rawdata);

// 필요한 데이터만 분리
let testsList = name.tests;
let testName = name.name;
let suitsList = name.suites;

// md 파일을 쓰기 위한 데이터 선언
let data = "";

// # test name
data += `# ${testName}\n`;

suitsList.forEach((suit) => {
  const suitName = suit.name;
  const suitTests = suit.tests;

  // ## suit name
  data += `\n## ${suitName}\n`;

  let index = 1;
  suitTests.forEach((testId) => {
    let testCase = {};
    // testCase들 중에서 suit에 담긴 애들만 추출
    testsList.forEach((test) => {
      let testName = test.name;
      let testCommandList = test.commands;
      if (test.id == testId) {
        testCase = {
          name: testName,
          commands: testCommandList,
        };
        return false;
      }
    });

    //  ### testcase 이름
    data += `\n### ${testCase.name}\n`;

    // 뽑혀온 testCase에서 test procedure를 적는다.
    index = 1;
    testCase.commands.forEach((command) => {
      if (command.comment == "") {
        return false;
      } else {
        data += `\n${index}. ${command.comment}`;
        index++;
      }
    });
    data += "\n";
  });
});

// md 파일 쓰기
fs.writeFileSync(`${testName}.md`, data);
