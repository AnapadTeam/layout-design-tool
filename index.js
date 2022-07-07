// parameters
let margin = 10
let radius

// state
let rowCount = 0

let run = () => {
  testFullFiveRows()
}

let testFullFiveRows = () => {
  // x = row height
  let x = (515 - 6*margin)/5

  // corner rounding
  radius = 0.15*x

  // derivations
  xTab = 1.5*x
  xRet = (13*(x + margin) + xTab - (11*x + 12*margin))/2
  xShf = (13*(x + margin) + xTab - (10*x + 11*margin))/2
  xCmd = (13*(x + margin) + xTab - (12*x + 13*margin))/2
  xSpc = 5*x + 4*margin

  // rows
  for (let i = 0; i < 5; i++)
    row(x)
  
  // r1
  for (let i = 0; i < 13; i++)
    key(x, x, 'r1')
  key(xTab, x, 'r1')
  
  // r2
  key(xTab, x, 'r2')
  for (let i = 0; i < 13; i++)
    key(x, x, 'r2')
  
  // r3
  key(xRet, x, 'r3')
  for (let i = 0; i < 11; i++)
    key(x, x, 'r3')
  key(xRet, x, 'r3')

  // r4
  key(xShf, x, 'r4')
  for (let i = 0; i < 10; i++)
    key(x, x, 'r4')
  key(xShf, x, 'r4')

  // r5
  for (let i = 0; i < 3; i++)
    key(x, x, 'r5')
  key(xCmd, x, 'r5')
  key(xSpc, x, 'r5')
  key(xCmd, x, 'r5')
  for (let i = 0; i < 2; i++)
    key(x, x, 'r5')
  key(x, 0.45*x, 'r5')
  key(x, 0.45*x, 'r5')
  key(x, x, 'r5')
}

let row = (height) => {
  rowCount++

  let r = document.createElement('div')
  r.className = 'row'
  r.id = 'r' + rowCount
  r.style.width = 'calc(100% - 2*' + margin + 'px)'
  r.style.height = height + 'px'
  r.style.margin = margin + 'px 0 0 ' + margin + 'px'

  let d = document.getElementById('display')
  d.append(r)
}

let key = (width, height, rowId) => {
  let k = document.createElement('div')
  k.className = 'key'
  k.style.width = width + 'px'
  k.style.height = height + 'px'
  k.style.borderRadius = radius + 'px'
  k.style.marginRight = margin + 'px'

  let r = document.getElementById(rowId)
  r.append(k)
}

let arrowUpDown = () => {
  
}
