function ordenarNumeros () {
  let nums = []
  
  for (let i = 0; i < 4; i++) {
    nums[i] = parseFloat(prompt("Digite um número"));
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (nums[j] < nums[j+1]) {
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  document.write(nums)
}