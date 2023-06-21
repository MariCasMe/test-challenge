const { default: expect } = require('expect');
const DNA = require('../dna');

test ('Obtaining a dna string',()=>{
    expect(DNA("AaTtGgCc")).toBe("ATGC");
})
test ('No canonical letters in the sample string',()=>{
    expect(DNA("aWndIlP")).toBe("");
})